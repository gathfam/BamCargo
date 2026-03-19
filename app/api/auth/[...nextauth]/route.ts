import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/config/db";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username dan password wajib diisi");
        }

        try {
          const [users]: any = await pool.execute(
            "SELECT * FROM users WHERE username = ? LIMIT 1",
            [credentials.username],
          );

          if (!users || users.length === 0) {
            throw new Error("Username atau password salah");
          }

          const user = users[0];
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (!isPasswordValid) {
            throw new Error("Username atau password salah");
          }

          return {
            id: user.id.toString(),
            name: user.username,
          };
        } catch (error: any) {
          throw new Error(error.message || "Gagal memproses login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "KODERAHASIBAMCARGOJWT",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
