import { NextRequest, NextResponse } from "next/server"
import { unlink } from "fs/promises"
import path from "path"
import { revalidateTag } from "next/cache"
import { getUserSessionId } from "@/lib/auth"
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server"
import { processImage, saveUploadedImage } from "@/lib/upload/image"

export async function GET(
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

    const item = await GalleryServerService.getById(id)
    if (!item) {
      return NextResponse.json({ error: "Foto galeri tidak ditemukan" }, { status: 404 })
    }

    return NextResponse.json(item)
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memuat foto galeri" },
      { status: 500 },
    )
  }
}

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

    const existing = await GalleryServerService.getById(id)
    if (!existing) {
      return NextResponse.json({ error: "Foto galeri tidak ditemukan" }, { status: 404 })
    }

    const formData = await req.formData()
    const title = (formData.get("title") as string | null)?.trim()
    const description = formData.get("description") as string | null
    const alt = (formData.get("alt") as string | null)?.trim()
    const category = (formData.get("category") as string | null)?.trim()
    const orderRaw = formData.get("sort_order") as string | null
    const isActiveRaw = formData.get("is_active") as string | null
    const file = formData.get("image") as File | null

    const payload: {
      title?: string
      description?: string | null
      image_url?: string
      alt?: string
      category?: string
      sort_order?: number
      is_active?: boolean
    } = {}

    if (title !== undefined && title !== null) {
      if (!title) {
        return NextResponse.json({ error: "Judul tidak boleh kosong" }, { status: 400 })
      }
      payload.title = title
    }
    if (description !== null) {
      payload.description = description.trim() || null
    }
    if (alt !== undefined && alt !== null) {
      if (!alt) {
        return NextResponse.json({ error: "Alt text tidak boleh kosong" }, { status: 400 })
      }
      payload.alt = alt
    }
    if (category !== undefined && category !== null) {
      if (!category) {
        return NextResponse.json({ error: "Kategori tidak boleh kosong" }, { status: 400 })
      }
      payload.category = category
    }
    if (orderRaw !== null) {
      payload.sort_order = parseInt(orderRaw, 10) || 0
    }
    if (isActiveRaw !== null) {
      payload.is_active = isActiveRaw !== "false"
    }

    let oldImageToDelete: string | null = null
    if (file && file instanceof File && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const processed = await processImage(buffer)
      const imageUrl = await saveUploadedImage(processed, file.name, "gallery")
      payload.image_url = imageUrl
      oldImageToDelete = existing.image_url
    }

    if (Object.keys(payload).length === 0) {
      return NextResponse.json({ error: "Tidak ada data yang diubah" }, { status: 400 })
    }

    const updated = await GalleryServerService.update(id, payload)

    if (oldImageToDelete && oldImageToDelete.startsWith("/uploads/")) {
      await unlink(path.join(process.cwd(), "public", oldImageToDelete)).catch(() => null)
    }

    revalidateTag("gallery", "max")
    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengupdate foto galeri" },
      { status: 500 },
    )
  }
}

export async function DELETE(
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

    const gallery = await GalleryServerService.getById(id)
    if (!gallery) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    if (gallery.image_url.startsWith("/uploads/")) {
      await unlink(path.join(process.cwd(), "public", gallery.image_url)).catch(
        () => null,
      )
    }

    await GalleryServerService.delete(id)
    revalidateTag("gallery", "max")
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus galeri" },
      { status: 500 },
    )
  }
}
