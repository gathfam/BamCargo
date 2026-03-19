"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function getUserSessionId() {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any)?.id) {
    return null;
  }

  return (session.user as any).id;
}
