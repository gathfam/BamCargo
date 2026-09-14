import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import QueryProvider from "@/providers/QueryProviders";
import AuthProvider from "@/providers/AuthProviders";
import { Toaster } from "@bamcargo/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | BamCargo",
    default: "BAMCARGO | Amanah. Cepat dan Tepat.",
  },
  description: "Admin panel BAM Cargo",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-[#171717]`}
      >
        <AuthProvider>
          <QueryProvider>
            <Toaster richColors theme="light" />
            {children}
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}