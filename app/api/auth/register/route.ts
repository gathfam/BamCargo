import pool from "@/config/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  let hashedPassword;
  try {
    const formData = await req.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const full_name = formData.get("full_name") as string;

    if (!username || !password || !full_name) {
      return NextResponse.json(
        { message: "Semua field wajib diisi" },
        { status: 400 },
      );
    }

    const [existingUser]: any = await pool.query(
      "SELECT username FROM users where username = ?;",
      [username],
    );

    if (existingUser > 0)
      return NextResponse.json(
        { message: "Username sudah terdaftar" },
        { status: 409 },
      );

    hashedPassword = await bcrypt.hash(password, 10);
    const query =
      "INSERT INTO users (username, password, full_name) VALUES (?,?,?);";

    const [result]: any = await pool.execute(query, [
      username,
      hashedPassword,
      full_name,
    ]);
    return NextResponse.json(
      { message: "User berhasil didaftarkan", user: result.insertId },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: `Gagal mendaftarkan user`, error: e },
      { status: 500 },
    );
  }
}
