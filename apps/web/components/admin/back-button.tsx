"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@bamcargo/ui/button";

interface BackButtonProps {
  /** Fallback URL kalau tidak ada history (bookmark/direct visit) */
  fallbackHref?: string;
  /** Label tombol */
  label?: string;
}

export function BackButton({
  fallbackHref = "/admin/dashboard",
  label = "Kembali",
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Cek apakah ada history dalam tab ini
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleClick}>
      <ArrowLeft className="w-4 h-4 mr-2" />
      Kembali
    </Button>
  );
}