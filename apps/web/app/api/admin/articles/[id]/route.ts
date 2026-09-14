import { NextRequest, NextResponse } from "next/server"
import { unlink } from "fs/promises"
import path from "path"
import { revalidateTag } from "next/cache"
import { getUserSessionId } from "@/lib/auth"
import { ArticleServerService } from "@bamcargo/core/services/article-service-server"
import { ArticleUpdateSchema } from "@/lib/article-schema"
import { UPLOAD_CONFIG } from "@/lib/upload/config"
import {
  processImage,
  saveUploadedImage,
  validateImageFile,
  UploadError,
} from "@/lib/upload/image"

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "articles")
const { publicBaseUrl } = UPLOAD_CONFIG

// ============ GET by id ============
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const userId = await getUserSessionId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: idStr } = await params;
    const id = parseInt(idStr, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const article = await ArticleServerService.getById(id)
    if (!article) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("[GET /api/admin/articles/:id] error:", error);
    return NextResponse.json(
      { error: "Gagal memuat artikel" },
      { status: 500 },
    );
  }
}

// ============ PUT update ============
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id: idStr } = await params
    const id = parseInt(idStr, 10)
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 })
    }

    const existing = await ArticleServerService.getById(id)
    if (!existing) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      )
    }

    if (existing.author_id !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const formData = await req.formData()
    const file = formData.get("image") as File | null

    // Parse non-file fields
    const raw = {
      title: formData.get("title") as string | null,
      content: formData.get("content") as string | null,
      status: formData.get("status") as string | null,
      tags: formData.get("tags") as string | null,
    }

    const parsed = ArticleUpdateSchema.safeParse(raw)
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      return NextResponse.json({ error: firstError.message }, { status: 400 })
    }

    const payload: {
      title?: string
      content?: string
      status?: string
      tags?: string[] | null
      image_url?: string
    } = {}

    if (parsed.data.title !== undefined) {
      payload.title = parsed.data.title
    }
    if (parsed.data.content !== undefined) {
      payload.content = parsed.data.content
    }
    if (parsed.data.status !== undefined) {
      payload.status = parsed.data.status
    }
    if (parsed.data.tags !== undefined) {
      payload.tags = parsed.data.tags
    }

    let oldImageToDelete: string | null = null

    if (file && file instanceof File && file.size > 0) {
      validateImageFile({ size: file.size, type: file.type })

      const buffer = Buffer.from(await file.arrayBuffer())
      const processed = await processImage(buffer)
      const publicUrl = await saveUploadedImage(
        processed,
        file.name,
        "articles",
      )

      payload.image_url = publicUrl
      oldImageToDelete = existing.image_url
    }

    if (Object.keys(payload).length === 0) {
      return NextResponse.json(
        { error: "Tidak ada data yang diupdate" },
        { status: 400 },
      )
    }

    const updated = await ArticleServerService.update(id, payload)

    if (
      oldImageToDelete &&
      oldImageToDelete.startsWith(UPLOAD_CONFIG.publicBaseUrl)
    ) {
      const oldFilename = path.basename(oldImageToDelete)
      const oldFilepath = path.join(
        process.cwd(),
        UPLOAD_CONFIG.fsBaseDir,
        "articles",
        oldFilename,
      )
      unlink(oldFilepath).catch((err) =>
        console.warn("[PUT article] failed to delete old image:", err.message),
      )
    }

    revalidateTag("articles", "max")

    return NextResponse.json(updated)
  } catch (error) {
    console.error("[PUT /api/admin/articles/:id] error:", error)

    if (error instanceof UploadError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode },
      )
    }

    return NextResponse.json(
      { error: "Gagal mengupdate artikel" },
      { status: 500 },
    )
  }
}

// ============ DELETE ============
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id: idStr } = await params
    const id = parseInt(idStr, 10)
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 })
    }

    const existing = await ArticleServerService.getById(id)
    if (!existing) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      )
    }

    await ArticleServerService.delete(id)

    if (existing.image_url && existing.image_url.startsWith(publicBaseUrl)) {
      const filename = path.basename(existing.image_url)
      const filepath = path.join(UPLOAD_DIR, filename)
      unlink(filepath).catch((err) =>
        console.warn("[DELETE article] failed to delete file:", err.message),
      )
    }

    revalidateTag("articles", "max")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[DELETE /api/admin/articles/:id] error:", error)
    return NextResponse.json(
      { error: "Gagal menghapus artikel" },
      { status: 500 },
    )
  }
}
