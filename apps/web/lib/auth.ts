import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function getUserSessionId(): Promise<number | null> {
  const session = await getServerSession(authOptions);
  return session?.user?.id ?? null;
}

export function isAuthorizedAutomation(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;
  const token = authHeader.slice(7);
  return token === process.env.AUTOMATION_API_KEY;
}