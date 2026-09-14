import { NextRequest, NextResponse } from "next/server"
import { ArticleServerService } from "@bamcargo/core/services/article-service-server"
import type {
  PublicArticleListItem,
} from "@bamcargo/core/types/article-types"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10))
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "10", 10)),
    )
    const tag = searchParams.get("tag")?.trim()

    const result = await ArticleServerService.list({
      page,
      limit,
      status: "published",
      tag: tag || undefined,
    })

    const data: PublicArticleListItem[] = result.data.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      image_url: item.image_url,
      tags: item.tags,
      created_at: item.created_at,
    }))

    return NextResponse.json({
      data,
      pagination: result.pagination,
    })
  } catch (error) {
    console.error("[GET /api/article] error:", error)
    return NextResponse.json(
      { error: "Gagal memuat daftar artikel" },
      { status: 500 },
    )
  }
}