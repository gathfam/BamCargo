import { NextResponse } from "next/server";
import pool from "@/config/db";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const [rows]: any = await pool.execute(
      `
      SELECT 
        id, 
        title, 
        slug, 
        content, 
        image_url, 
        created_at, 
        author_id,
        status 
      FROM articles 
      WHERE slug = ?
    `,
      [slug],
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data artikel" },
      { status: 500 },
    );
  }
}
