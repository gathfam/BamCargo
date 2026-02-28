import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
const bcrypt = require("bcrypt");

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "KODERAHASIBAMCARGOJWT",
);
export async function POST(req: Request) {
  let connection;
  try {
    connection = await connectToDatabase();
    const formData = await req.formData();
    const username = await formData.get("username");
    const password = await formData.get("password");

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username dan password wajib diisi" },
        { status: 400 },
      );
    }

    const [users]: any = await connection.execute(
      "SELECT * FROM users WHERE username = ? LIMIT 1;",
      [username],
    );

    if (users.length === 0) {
      return NextResponse.json(
        { message: "Username atau password salah" },
        { status: 401 },
      );
    }

    const user = users[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Username atau password salah" },
        { status: 401 },
      );
    }

    const token = await new SignJWT({
      id: user.id,
      username: user.username,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(SECRET_KEY);

    const cookieStore = await cookies();
    cookieStore.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 hari dalam detik
      path: "/",
    });

    return NextResponse.json(
      {
        message: "Berhasil login",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal memproses login" },
      { status: 500 },
    );
  } finally {
    if (connection) await connection.end();
  }
}
