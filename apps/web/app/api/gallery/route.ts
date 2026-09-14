import { NextRequest, NextResponse } from "next/server"
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server"

export const revalidate = 3600

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") ?? "1", 10)
    const limit = parseInt(searchParams.get("limit") ?? "24", 10)
    const category = searchParams.get("category")?.trim() ?? undefined

    const response = await GalleryServerService.listPublic({ category, page, limit })
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memuat galeri" },
      { status: 500 },
    )
  }
}

