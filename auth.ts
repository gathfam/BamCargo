import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectToDatabase from "@/config/db";
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Tambahkan secret secara eksplisit di sini untuk memastikan
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        let connection;
        try {
          connection = await connectToDatabase();
          const [users] = await connection.execute(
            "SELECT * FROM users WHERE username = ? LIMIT 1",
            [credentials.username],
          );

          if (!users || users.length === 0) return null;

          const user = users[0];
          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (!isMatch) return null;

          return {
            id: user.id.toString(),
            name: user.username,
            // v5 butuh email atau name agar session terdeteksi "valid" secara default
            email: user.username + "@bamcargo.com",
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        } finally {
          if (connection) await connection.end();
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.name;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
});
