import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir, unlink } from "fs/promises"
import path from "path"
import sharp from "sharp"
import { revalidateTag } from "next/cache"
import { getUserSessionId } from "@/lib/auth"
import { BannerServerService } from "@bamcargo/core/services/banner-service-server"

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "banners")
const PUBLIC_PATH = "/uploads/banners"
const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp"]

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

    const banner = await BannerServerService.getById(id)
    if (!banner) {
      return NextResponse.json(
        { error: "Banner tidak ditemukan" },
        { status: 404 },
      )
    }

    return NextResponse.json(banner)
  } catch (error) {
    console.error("[GET /api/admin/banners/:id] error:", error);
    return NextResponse.json({ error: "Gagal memuat banner" }, { status: 500 });
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

    const existing = await BannerServerService.getById(id)
    if (!existing) {
      return NextResponse.json(
        { error: "Banner tidak ditemukan" },
        { status: 404 },
      )
    }

    const formData = await req.formData()

    const file = formData.get("image") as File | null
    const title = (formData.get("title") as string | null)?.trim()
    const description = formData.get("description") as string | null
    const alt = (formData.get("alt") as string | null)?.trim()
    const link = formData.get("link") as string | null
    const orderRaw = formData.get("sort_order") as string | null
    const isActiveRaw = formData.get("is_active") as string | null
    const startDate = formData.get("start_date") as string | null
    const endDate = formData.get("end_date") as string | null

    const payload: {
      title?: string
      description?: string | null
      image_url?: string
      alt?: string
      width?: number
      height?: number
      is_portrait?: boolean
      link?: string | null
      sort_order?: number
      is_active?: boolean
      start_date?: string | null
      end_date?: string | null
    } = {}

    if (title !== undefined && title !== null) {
      if (!title) {
        return NextResponse.json(
          { error: "Judul tidak boleh kosong" },
          { status: 400 },
        )
      }
      payload.title = title
    }
    if (description !== null) {
      payload.description = description?.trim() || null
    }
    if (alt !== undefined && alt !== null) {
      if (!alt) {
        return NextResponse.json(
          { error: "Alt text tidak boleh kosong" },
          { status: 400 },
        )
      }
      payload.alt = alt
    }
    if (link !== null) {
      payload.link = link?.trim() || null
    }
    if (orderRaw !== null) {
      payload.sort_order = parseInt(orderRaw, 10) || 0
    }
    if (isActiveRaw !== null) {
      payload.is_active = isActiveRaw !== "false"
    }
    if (startDate !== null) {
      payload.start_date = startDate?.trim() || null
    }
    if (endDate !== null) {
      payload.end_date = endDate?.trim() || null
    }

    let oldImageToDelete: string | null = null
    if (file && file instanceof File && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Ukuran file maksimal 5MB" },
          { status: 400 },
        )
      }
      if (!ALLOWED_MIME.includes(file.type)) {
        return NextResponse.json(
          { error: "Format gambar harus JPG, PNG, atau WebP" },
          { status: 400 },
        )
      }

      await mkdir(UPLOAD_DIR, { recursive: true })
      const buffer = Buffer.from(await file.arrayBuffer())
      const image = sharp(buffer)
      const metadata = await image.metadata()

      if (!metadata.width || !metadata.height) {
        return NextResponse.json(
          { error: "Gambar tidak valid" },
          { status: 400 },
        )
      }

      const isPortrait = metadata.height > metadata.width
      const filename = `banner-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}.webp`
      const filepath = path.join(UPLOAD_DIR, filename)

      const processed = await image
        .resize({
          width: 1920,
          height: 1920,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 85 })
        .toBuffer({ resolveWithObject: true })

      await writeFile(filepath, processed.data)

      payload.image_url = `${PUBLIC_PATH}/${filename}`
      payload.width = processed.info.width
      payload.height = processed.info.height
      payload.is_portrait = isPortrait
      oldImageToDelete = existing.image_url
    }

    if (Object.keys(payload).length === 0) {
      return NextResponse.json(
        { error: "Tidak ada data yang diupdate" },
        { status: 400 },
      )
    }

    const updated = await BannerServerService.update(id, payload)

    if (oldImageToDelete && oldImageToDelete.startsWith(PUBLIC_PATH)) {
      const oldFilename = path.basename(oldImageToDelete)
      const oldFilepath = path.join(UPLOAD_DIR, oldFilename)
      unlink(oldFilepath).catch((err) =>
        console.warn("[PUT banner] failed to delete old image:", err.message),
      )
    }

    revalidateTag("banners", "max")
    return NextResponse.json(updated)
  } catch (error) {
    console.error("[PUT /api/admin/banners/:id] error:", error)
    return NextResponse.json(
      { error: "Gagal mengupdate banner" },
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

    const existing = await BannerServerService.getById(id)
    if (!existing) {
      return NextResponse.json(
        { error: "Banner tidak ditemukan" },
        { status: 404 },
      )
    }

    await BannerServerService.delete(id)

    // Delete file (best effort)
    if (existing.image_url.startsWith(PUBLIC_PATH)) {
      const filename = path.basename(existing.image_url)
      const filepath = path.join(UPLOAD_DIR, filename)
      unlink(filepath).catch((err) =>
        console.warn("[DELETE banner] failed to delete file:", err.message),
      )
    }

    revalidateTag("banners", "max")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[DELETE /api/admin/banners/:id] error:", error)
    return NextResponse.json(
      { error: "Gagal menghapus banner" },
      { status: 500 },
    )
  }
}
