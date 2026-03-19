import { NextResponse } from "next/server";
import { mkdir } from "fs/promises";
import path from "path";
import sharp from "sharp";
import pool from "@/config/db";
import { getUserSessionId } from "@/lib/action";

const UPLOAD_DIR =
  process.env.NODE_ENV === "production"
    ? "/home/bamcar7304/bamcargo_storage"
    : path.join(process.cwd(), "public", "uploads");

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.max(1, parseInt(searchParams.get("limit") || "10"));
    const offset = (page - 1) * limit;

    const [countResult]: any = await pool.query(
      "SELECT COUNT(*) as total FROM articles",
    );

    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);

    const [rows] = await pool.query(
      `SELECT 
        id, 
        title, 
        slug, 
        LEFT(content, 150) AS excerpt, 
        image_url, 
        created_at, 
        author_id,
        status 
      FROM articles 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?`,
      [limit, offset],
    );

    return NextResponse.json(
      {
        data: rows,
        pagination: { page, limit, total, totalPages },
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Proxy Error (GET)", error: String(error) },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getUserSessionId();
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;

    if (!title || !content || !file) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 },
      );
    }

    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran gambar maksimal 2MB" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const cleanFileName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9]/g, "-");
    const fileName = `${Date.now()}-${cleanFileName}.webp`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    await mkdir(UPLOAD_DIR, { recursive: true });

    await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(filePath);

    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") + `-${Date.now()}`;

    const imagePath = `/uploads/${fileName}`;

    await pool.execute(
      "INSERT INTO articles (author_id, title, slug, content, image_url) VALUES (?, ?, ?, ?, ?)",
      [userId, title, slug, content, imagePath],
    );

    return NextResponse.json(
      { message: "Artikel berhasil diupload", imagePath },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Gagal memproses artikel" },
      { status: 500 },
    );
  }
}
