import { NextRequest, NextResponse } from "next/server"
import { getUserSessionId } from "@/lib/auth"
import { revalidateTag } from "next/cache"
import { BannerServerService } from "@bamcargo/core/services/banner-service-server"
import { processAndSaveImageWithInfo } from "@/lib/upload/image"

// ============ GET list (admin) ============
export async function GET(req: NextRequest) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10))
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "20", 10)),
    )
    const isActiveParam = searchParams.get("is_active")

    const result = await BannerServerService.list({
      page,
      limit,
      is_active: isActiveParam === "true" ? true : isActiveParam === "false" ? false : undefined,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("[GET /api/banners] error:", error)
    return NextResponse.json(
      { error: "Gagal memuat daftar banner" },
      { status: 500 },
    )
  }
}

// ============ POST create ============
export async function POST(req: NextRequest) {
  try {
    const userId = await getUserSessionId()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()

    const file = formData.get("image") as File | null
    const title = (formData.get("title") as string | null)?.trim()
    const description =
      (formData.get("description") as string | null)?.trim() || null
    const alt = (formData.get("alt") as string | null)?.trim()
    const link = (formData.get("link") as string | null)?.trim() || null
    const orderRaw = formData.get("sort_order") as string | null
    const isActiveRaw = formData.get("is_active") as string | null
    const startDate =
      (formData.get("start_date") as string | null)?.trim() || null
    const endDate = (formData.get("end_date") as string | null)?.trim() || null

    // Validation
    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { error: "File gambar wajib diupload" },
        { status: 400 },
      )
    }
    if (!title) {
      return NextResponse.json(
        { error: "Judul banner wajib diisi" },
        { status: 400 },
      )
    }
    if (!alt) {
      return NextResponse.json(
        { error: "Alt text wajib diisi (untuk accessibility)" },
        { status: 400 },
      )
    }

    const order = orderRaw ? parseInt(orderRaw, 10) : 0
    const isActive = isActiveRaw === "false" ? 0 : 1

    const buffer = Buffer.from(await file.arrayBuffer())
    const uploadResult = await processAndSaveImageWithInfo(
      buffer,
      file.name,
      "banners",
      { maxWidth: 1920, maxHeight: 1920, quality: 85 },
    )

    const created = await BannerServerService.create({
      title,
      description,
      image_url: uploadResult.url,
      alt,
      width: uploadResult.width,
      height: uploadResult.height,
      is_portrait: uploadResult.isPortrait,
      link,
      sort_order: order,
      is_active: isActive === 1,
      start_date: startDate,
      end_date: endDate,
    })

    revalidateTag("banners", "max")

    return NextResponse.json(created, { status: 201 })
  } catch (error) {
    console.error("[POST /api/admin/banners] error:", error)
    return NextResponse.json(
      { error: "Gagal membuat banner" },
      { status: 500 },
    )
  }
}
