import { NextResponse } from "next/server"
import { BannerServerService } from "@bamcargo/core/services/banner-service-server"

export const revalidate = 3600

export async function GET() {
  try {
    const response = await BannerServerService.listPublic()
    return NextResponse.json(response)
  } catch (error) {
    console.error("[GET /api/banners] error:", error)
    return NextResponse.json(
      { error: "Gagal memuat banner" },
      { status: 500 },
    )
  }
}