import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(req: NextRequest) {
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET || "KODERAHASIBAMCARGOJWT" 
  })
  
  const { pathname } = req.nextUrl
  const isLoggedIn = !!token

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))
      }
      return NextResponse.next()
    }

    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"]
}