import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(req: Request) {
  let connection;
  let hashedPassword;
  try {
    const formData = await req.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const full_name = formData.get("full_name");

    if (!username || !password || !full_name) {
      return NextResponse.json(
        { message: "Semua field wajib diisi" },
        { status: 400 },
      );
    }
    
    connection = await connectToDatabase();

    const [existingUser]: any = await connection.execute(
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

    const [result]: any = await connection.execute(query, [
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
  } finally {
    if (connection) await connection.end();
  }
}
