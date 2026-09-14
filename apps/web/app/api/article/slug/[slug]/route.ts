import { NextResponse } from "next/server"
import { ArticleServerService } from "@bamcargo/core/services/article-service-server"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params

    if (!slug) {
      return NextResponse.json({ error: "Slug tidak valid" }, { status: 400 })
    }

    const article = await ArticleServerService.getBySlug(slug)
    if (!article) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("[GET /api/article/slug/:slug] error:", error)
    return NextResponse.json(
      { error: "Gagal memuat artikel" },
      { status: 500 },
    )
  }
}