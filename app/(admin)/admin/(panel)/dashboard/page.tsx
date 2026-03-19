"use client"; // Tambahkan ini jika pakai event handler (onClick)

import { Button } from "@/components/ui/button";
import { getUserSessionId } from "@/lib/action";
import { useRouter } from "next/navigation";

export default function DashboardAdmin() {
  const router = useRouter();
  const redirect = () => {
    setTimeout(() => {
      router.push("/admin/artikel");
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full max-w-7xl mx-auto py-6 px-6 space-y-8"></main>
    </div>
  );
}
