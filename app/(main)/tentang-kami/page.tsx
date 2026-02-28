"use client";

import Link from "next/link";
import {
  History,
  ShieldCheck,
  Rocket,
  Handshake,
  Medal,
  Zap,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const missions = [
    "Karyawan adalah aset yang harus selalu dikembangkan kemampuan dan kesejahteraannya",
    "Mengembangkan teknologi yang relevan untuk meningkatkan layanan",
    "Fokus pada kesuksesan bisnis pelanggan",
    "Memperkuat jaringan pengiriman di wilayah Indonesia",
    "Mendorong pertumbuhan usaha yang berkesinambungan dengan menciptakan nilai lebih bagi pemangku kepentingan",
  ];

  return (
    <div className="min-h-screen transition-colors duration-200 bg-background text-slate-900 dark:text-slate-100">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <Card className="text-center py-20 mb-12 shadow-sm ">
          <CardContent>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 border-none rounded-full"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-rose-600 inline-block"></span>
              PROFIL PERUSAHAAN
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Tentang <span className="text-rose-600">Bam</span>
              <span className="text-orange-500">cargo</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              "Menjadi perusahaan jasa kiriman pilihan masyarakat yang amanah di
              Indonesia"
            </p>
          </CardContent>
        </Card>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* History Section */}
          <Card className="lg:col-span-7 p-8 shadow-sm flex flex-col justify-center ">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                  <History className="text-orange-500 w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                    Sejarah Kami
                  </h2>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
                    Since 2014
                  </p>
                </div>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Didirikan pada tahun 2014 di{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    Banjarmasin
                  </span>
                  , PT Borneo Arta Mandiri (Bamcargo) mengawali langkahnya
                  dengan visi menjadi mitra logistik terdepan. Dengan dedikasi
                  tinggi, kami telah bertransformasi menjadi penyedia layanan
                  pengiriman barang yang komprehensif.
                </p>

                <div className="mt-8 flex items-center p-6 bg-slate-50 dark:bg-neutral-800/50 rounded-xl border border-slate-100 dark:border-neutral-700 h-auto md:h-32">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-700 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center mr-5">
                    <ShieldCheck className="text-rose-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Izin Resmi POS Indonesia (Lisensi No. 1440/2017)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Legalitas terjamin untuk keamanan pengiriman Anda
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Section - Updated */}
          <Card className="lg:col-span-5 bg-slate-900 text-white p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px] border-none">
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-3xl font-black mb-2">Misi Kami</h2>
                <div className="h-1.5 w-20 bg-rose-600 rounded-full"></div>
              </div>

              <ul className="space-y-5 flex-1 flex flex-col justify-center">
                {missions.map((misi, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0 group-hover:text-orange-500 transition-colors" />
                    <span className="text-slate-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Decorative Icon */}
            <Rocket
              className="absolute -right-16 -bottom-16 text-white/5 w-[280px] h-[280px] rotate-12 pointer-events-none"
              strokeWidth={1}
            />
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Amanah",
              desc: "Kepercayaan Anda adalah prioritas utama kami dalam menjaga setiap kiriman sampai ke tujuan.",
              icon: Handshake,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
              border:
                "hover:border-emerald-300 dark:hover:border-emerald-900 ",
            },
            {
              title: "Professional",
              desc: "Dikelola oleh tim ahli dengan standar operasional tinggi untuk hasil yang maksimal.",
              icon: Medal,
              color: "text-rose-600",
              bg: "bg-rose-600/10",
              border:
                "hover:border-rose-300 dark:hover:border-rose-500 ",
            },
            {
              title: "Cepat",
              desc: "Sistem distribusi yang efisien memastikan pengiriman dilakukan dalam waktu sesingkat mungkin.",
              icon: Zap,
              color: "text-orange-500",
              bg: "bg-orange-500/10",
              border:
                "hover:border-orange-300 dark:hover:border-orange-900 ",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className={`group ${item.border} border transition-all duration-300 shadow-sm`}
            >
              <CardContent className="p-8">
                <div
                  className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`${item.color} w-6 h-6`} />
                </div>
                <h4 className="font-black text-xl text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-10 shadow-sm ">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-rose-600/10 flex items-center justify-center flex-shrink-0">
                  <Headphones className="text-rose-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">
                    Ingin Bekerjasama dengan Kami?
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Tim kami siap membantu solusi logistik terbaik untuk
                    kebutuhan bisnis Anda.
                  </p>
                </div>
              </div>
              <Button
                variant={"outline"}
                asChild
                className="w-full whitespace-nowrap bg-slate-900 px-5 py-2.5 h-12 font-bold uppercase text-white transition-all hover:opacity-90 dark:bg-white dark:text-slate-900 md:w-auto"
              >
                <Link href={"#"}>Hubungi Kami Sekarang</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
