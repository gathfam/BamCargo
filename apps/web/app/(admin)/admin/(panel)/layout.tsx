import { HeaderAdmin } from "@/components/admin/header";
import { getUserSessionId } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = await getUserSessionId();
  if (!userId) redirect("/admin/login");

  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
}
