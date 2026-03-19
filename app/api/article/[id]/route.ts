import { NextResponse } from "next/server";
import { mkdir, unlink } from "fs/promises";
import path from "path";
import pool from "@/config/db";
import sharp from "sharp";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const [rows]: any = await pool.execute(
      "SELECT image_url FROM articles WHERE id = ?",
      [id],
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      );
    }

    const imageUrl = rows[0].image_url;

    if (imageUrl) {
      const fileName = path.basename(imageUrl);
      const absolutePath =
        process.env.NODE_ENV === "production"
          ? path.join("/home/bamcar7304/bamcargo_storage", fileName)
          : path.join(process.cwd(), "public", "uploads", fileName);

      try {
        await unlink(absolutePath);
      } catch (fileError) {
        console.error("File fisik gagal dihapus:", fileError);
      }
    }

    await pool.execute("DELETE FROM articles WHERE id = ?", [id]);

    return NextResponse.json(
      { message: "Artikel dan gambar dihapus" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { error: "Gagal menghapus artikel" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  let connection;
  try {
    const { id } = await params;
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title dan konten wajib diisi" },
        { status: 400 },
      );
    }

    const [oldRows]: any = await pool.execute(
      "SELECT image_url FROM articles WHERE id = ?",
      [id],
    );

    if (oldRows.length === 0) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 },
      );
    }

    let newImageUrl = oldRows[0].image_url;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    if (file && file.size > 0) {
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json({ error: "Maksimal 2MB" }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const cleanFileName = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9]/g, "-");
      const fileName = `${Date.now()}-${cleanFileName}.webp`;

      const uploadDir =
        process.env.NODE_ENV === "production"
          ? "/home/bamcar7304/bamcargo_storage"
          : path.join(process.cwd(), "public", "uploads");

      const filePath = path.join(uploadDir, fileName);
      await mkdir(uploadDir, { recursive: true });

      await sharp(buffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(filePath);

      newImageUrl = `/uploads/${fileName}`;

      if (oldRows[0].image_url) {
        const oldFileName = path.basename(oldRows[0].image_url);
        const oldFilePath = path.join(uploadDir, oldFileName);
        try {
          await unlink(oldFilePath);
        } catch (e) {
          console.error("Gagal hapus gambar lama", e);
        }
      }
    }

    await pool.execute(
      "UPDATE articles SET title = ?, slug = ?, content = ?, image_url = ? WHERE id = ?",
      [title, slug, content, newImageUrl, id],
    );

    return NextResponse.json(
      { message: "Artikel diperbarui" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Gagal update" }, { status: 500 });
  }
}
