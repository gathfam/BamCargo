import { NextRequest, NextResponse } from "next/server"
import { revalidateTag } from "next/cache"
import { getUserSessionId } from "@/lib/auth"
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server"
import { processImage, saveUploadedImage } from "@/lib/upload/image"

export async function GET(req: NextRequest) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") || "1", 10)
    const limit = parseInt(searchParams.get("limit") || "20", 10)
    const is_active = searchParams.has("is_active")
      ? searchParams.get("is_active") === "true"
      : undefined
    const category = searchParams.get("category")?.trim()
    const response = await GalleryServerService.list({
      page,
      limit,
      is_active,
      category,
    })
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: "Gagal memuat galeri" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const formData = await req.formData()
    const title = (formData.get("title") as string)?.trim()
    const description = (formData.get("description") as string)?.trim() || null
    const alt = (formData.get("alt") as string)?.trim()
    const category = (formData.get("category") as string)?.trim()
    const sortOrder = parseInt(
      (formData.get("sort_order") as string) || "0",
      10,
    )
    const isActive = formData.get("is_active") === "false" ? 0 : 1
    const file = formData.get("image") as File | null

    if (!title || !alt || !category || !file || file.size === 0) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 },
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const processed = await processImage(buffer)
    const imageUrl = await saveUploadedImage(processed, file.name, "gallery")

    const created = await GalleryServerService.create({
      title,
      description,
      image_url: imageUrl,
      alt,
      category,
      sort_order: sortOrder,
      is_active: isActive === 1,
    })

    revalidateTag("gallery", "max")
    return NextResponse.json(created, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Gagal upload galeri" }, { status: 500 })
  }
}
