import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake } from "lucide-react";

export default function AboutPage() {
  return (
    <div
      className={`min-h-screen transition-colors duration-200 bg-background text-slate-900 dark:text-slate-100`}
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Hero Section */}
        <Card className="text-left py-12 bg-background mb-12 shadow-sm bg-linear-to-r text-white from-cyan-500 to-blue-600 ">
          <CardContent className="flex flex-col items-left space-y-4">
            <div className="flex items-center gap-4 ">
              <Snowflake className="h-10 w-10 animate-pulse" />
              <Badge
                variant="secondary"
                className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white"
              >
                Pengiriman Frozen Food Terpercaya
              </Badge>
            </div>
            <h2 className="mb-4 text-3xl leading-tight font-bold md:text-5xl">
              Pengiriman Frozen Food Aman, Dingin, dan Tepat Waktu
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-cyan-50 md:text-xl">
              Dari Jakarta ke seluruh Kalimantan – Solusi logistik profesional
              untuk bisnis frozen food Anda
            </p>
            <div className="flex flex-wrap items-center gap-4 self-start">
              <div className="rounded-lg border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm">
                <p className="text-sm text-cyan-100">Jadwal Keberangkatan</p>
                <p className="text-xl font-bold">Setiap Rabu & Jum'at</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm">
                <p className="text-sm text-cyan-100">Waktu Tempuh</p>
                <p className="text-xl font-bold">5-7 Hari Kerja</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg mb-16 max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            BAM Cargo Dingin hadir sebagai solusi logistik profesional untuk
            pengiriman produk beku (frozen food) dari Jakarta ke Kalimantan.
            Kami paham, bisnis frozen food membutuhkan{" "}
            <strong>ketepatan suhu dan waktu</strong> — makanya kami
            menghadirkan layanan khusus
            <span className="font-semibold text-cyan-600">
              {" "}
              cold chain logistic
            </span>{" "}
            yang siap menjaga kualitas produk Anda sampai tujuan.
          </p>
        </div>
      </main>
    </div>
  );
}
