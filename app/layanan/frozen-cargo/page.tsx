"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Snowflake,
  ThermometerSnowflake,
  CalendarClock,
  MapPinned,
  PackageCheck,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function FrozenCargoRemix() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- HEADER SIMPLE --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div>
            <span className="text-cyan-600 font-bold tracking-wider text-xs uppercase mb-2 block">
              BAM Cargo Cold Chain
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Pengiriman{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Beku & Segar
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-md text-right md:text-left leading-relaxed">
            Spesialis logistik pendingin Jakarta - Kalimantan. Menjaga kualitas
            produk Anda tetap prima di suhu terjaga.
          </p>
        </div>

        {/* --- HERO BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* 1. Main Value Prop (Besar, Dark Blue - Custom Background needed for contrast) */}
          <Card className="md:col-span-2 lg:col-span-2 row-span-2 bg-[#0F172A] border-none text-white overflow-hidden group">
            <CardContent className="p-8 md:p-10 relative h-full flex flex-col justify-center items-center">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all ease-in-out duration-500 group-hover:bg-cyan-400/30"></div>

              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center md:text-left md:items-start w-full">
                <div className="bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md border border-white/10 mb-6 flex items-center gap-2">
                  <ThermometerSnowflake className="w-4 h-4 text-cyan-300" />
                  <span className="text-xs font-medium text-cyan-50">
                    Suhu Terjaga -20°C
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Kirim Frozen Food Tanpa Cemas Cair.
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  Menggunakan container berpendingin (Reefer) standar
                  internasional. Daging, seafood, dan sosis aman sampai tujuan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 2. Schedule Card */}
          <Card className="flex flex-col justify-center">
            <CardContent className="p-8">
              <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <CalendarClock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Jadwal Pasti</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Rutin berangkat setiap minggu, meminimalisir stok kosong.
              </p>
              <div className="flex gap-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-xs font-bold">
                  Rabu
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-xs font-bold">
                  Jum'at
                </span>
              </div>
            </CardContent>
          </Card>

          {/* 3. Stats Card (Gradient Cyan - Custom Background needed) */}
          <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 border-none text-white shadow-lg shadow-cyan-500/20">
            <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full">
              <Snowflake className="w-10 h-10 mb-2 opacity-80 animate-pulse" />
              <h3 className="text-4xl font-extrabold mb-1">5-7</h3>
              <p className="text-cyan-100 text-sm font-medium">
                Hari Estimasi Tiba
              </p>
            </CardContent>
          </Card>

          {/* 4. Coverage Area */}
          <Card className="md:col-span-2">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <MapPinned className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Jangkauan Kalimantan
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Door-to-door service tersedia.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {["Banjarmasin", "Balikpapan", "Samarinda", "Pontianak"].map(
                  (city) => (
                    <span
                      key={city}
                      className="border border-border text-muted-foreground px-4 py-2 rounded-full text-sm hover:bg-secondary cursor-default"
                    >
                      {city}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- BOTTOM SECTION (Why Us & CTA) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Why Us List */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Kenapa UMKM Pilih Kami?
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Minimum Ringan",
                    desc: "Bisa kirim skala kecil, tidak harus satu kontainer full.",
                  },
                  {
                    title: "Cold Storage",
                    desc: "Gudang pendingin transit untuk menjaga suhu sebelum muat.",
                  },
                  {
                    title: "Packing Standar",
                    desc: "Tim kami memastikan packaging aman & sealed.",
                  },
                  {
                    title: "Tracking Realtime",
                    desc: "Pantau posisi paket frozen Anda via WhatsApp.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full h-fit">
                      <PackageCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-slate-900 border-none text-white relative overflow-hidden">
            <CardContent className="p-8 md:p-10 flex flex-col justify-center text-center h-full">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              <h3 className="text-white text-xl font-bold mb-2 relative z-10">
                Mulai Kirim Sekarang
              </h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                Dapatkan penawaran khusus untuk pengiriman rutin mingguan.
              </p>

              <Link
                href="https://wa.me/6281351895522"
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20 relative z-10"
              >
                <Phone className="w-5 h-5" />
                Chat WhatsApp
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}