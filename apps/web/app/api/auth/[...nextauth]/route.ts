import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@bamcargo/core/lib/db";
import bcrypt from "bcrypt";
import type { RowDataPacket } from "mysql2";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "build-time-placeholder";

// Runtime safety check
if (typeof window === "undefined" && NEXTAUTH_SECRET === "build-time-placeholder") {
  console.error("⚠️  NEXTAUTH_SECRET not set! Auth will fail in production.");
}

interface UserRow extends RowDataPacket {
  id: number;
  username: string;
  password: string;
}

export const authOptions: AuthOptions = {
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (NEXTAUTH_SECRET === "build-time-placeholder") {
          throw new Error("NEXTAUTH_SECRET not configured. Generate: openssl rand -base64 32");
        }

        if (!credentials?.username || !credentials?.password) {
          console.log("Username dan password wajib diisi");
          throw new Error("Username dan password wajib diisi");
        }
        console.log("🔍 Mencoba login user:", credentials.username);

        const [users] = await pool.execute<UserRow[]>(
          "SELECT id, username, password FROM users WHERE username = ? LIMIT 1",
          [credentials.username],
        );
        const user = users[0];
        if (!user) {
          console.log("❌ User tidak ditemukan:", credentials.username);
          return null; // Return null
        }
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isPasswordValid) throw new Error("Username atau password salah");

        // NextAuth User.id WAJIB string (kontrak internal)
        return {
          id: user.id.toString(),
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = Number(user.id);
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {

      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
  secret: NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
