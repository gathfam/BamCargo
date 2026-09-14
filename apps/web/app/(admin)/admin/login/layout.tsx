import { getUserSessionId } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = await getUserSessionId();
  if (userId) redirect("/admin/dashboard");

  return <>{children}</>;
}