"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export function HeaderAdmin() {
  const handleLogout = async () => {
    console.log("LOGOUT");
    await signOut({ callbackUrl: "/admin/login" });
  };
  const pathname = usePathname();
  if (pathname === "/admin/login") {
    return null;
  }
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-neutral-800 bg-white/90  dark:bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto hidden h-16 md:flex items-center px-6 justify-between">
        <div className="md:flex items-center space-x-4">
          <Image
            width="80"
            height="40"
            alt="logo_bamcargo"
            src="/logo-Bam-Cargo-100.png"
            className="object-contain"
          />
          <h1 className="font-bold">
            <span className="text-orange-600">ADMIN</span> DASHBOARD
          </h1>
        </div>
        <div className="flex space-x-4">
          <ThemeToggle />
          <Button onClick={handleLogout} variant={"destructive"}>
            Logout
          </Button>
        </div>
      </div>
      <div className="flex md:hidden mx-auto h-16 items-center px-6">
        <Button onClick={handleLogout} variant={"destructive"}>
          Logout
        </Button>
      </div>
    </header>
  );
}
