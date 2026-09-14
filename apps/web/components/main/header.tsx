import { getUserSessionId } from "@/lib/auth";
import { HeaderHomeClient } from "./header-client";

export async function HeaderHome() {
  const userId = await getUserSessionId();
  return <HeaderHomeClient isAuthenticated={Boolean(userId)} />;
}