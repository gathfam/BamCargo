"use client";

import Link from "next/link";
import Image from "next/image";
import {
  History,
  ShieldCheck,
  Handshake,
  Medal,
  Zap,
  Headphones,
  ArrowRight,
  Building2,
  Package,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@bamcargo/ui/button";
import { Card, CardContent } from "@bamcargo/ui/card";
import AboutCTA from "@/components/main/about-cta";

// ─── Types ────────────────────────────────────────────────────
type ValueVariant = "default" | "navy" | "orange";

interface ValueItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
  variant: ValueVariant;
}

interface StatItem {
  value: string;
  label: string;
  Icon: LucideIcon;
}

// ─── Constants ────────────────────────────────────────────────
const STATS: StatItem[] = [
  { value: "11+", label: "Tahun Pengalaman", Icon: History },
  { value: "4", label: "Cabang Aktif", Icon: Building2 },
  { value: "100K+", label: "Paket Terkirim", Icon: Package },
  { value: "34", label: "Provinsi Dijangkau", Icon: Globe2 },
];

const MISSIONS = [
  "Karyawan adalah aset yang harus selalu dikembangkan kemampuan dan kesejahteraannya",
  "Mengembangkan teknologi yang relevan untuk meningkatkan layanan",
  "Fokus pada kesuksesan bisnis pelanggan",
  "Memperkuat jaringan pengiriman di wilayah Indonesia",
  "Mendorong pertumbuhan usaha yang berkesinambungan",
] as const;

const VALUES: ValueItem[] = [
  {
    title: "Amanah",
    desc: "Kepercayaan Anda adalah prioritas utama kami dalam menjaga setiap kiriman sampai ke tujuan.",
    Icon: Handshake,
    variant: "default",
  },
  {
    title: "Professional",
    desc: "Dikelola oleh tim ahli dengan standar operasional tinggi untuk hasil yang maksimal.",
    Icon: Medal,
    variant: "navy",
  },
  {
    title: "Cepat",
    desc: "Sistem distribusi efisien memastikan pengiriman dilakukan dalam waktu sesingkat mungkin.",
    Icon: Zap,
    variant: "orange",
  },
];

const VALUE_STYLES: Record<
  ValueVariant,
  { card: string; icon: string; title: string; desc: string }
> = {
  default: {
    card: "bg-card border",
    icon: "bg-orange-surface text-orange",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
  navy: {
    card: "bg-navy border-none",
    icon: "bg-white/10 text-white",
    title: "text-white",
    desc: "text-white/70",
  },
  orange: {
    card: "bg-orange border-none",
    icon: "bg-white/20 text-white",
    title: "text-white",
    desc: "text-white/80",
  },
};

// ─── Sub-components ───────────────────────────────────────────
function ValueCard({ title, desc, Icon, variant }: ValueItem) {
  const s = VALUE_STYLES[variant];
  return (
    <Card className={`shadow-sm h-full ${s.card}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div
          className={`w-10 h-10 rounded-lg mb-4
                      flex items-center justify-center ${s.icon}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <h4 className={`font-black text-lg mb-1.5 ${s.title}`}>{title}</h4>
        <p className={`text-sm leading-relaxed ${s.desc}`}>{desc}</p>
      </CardContent>
    </Card>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ═══ HERO — compact ═══════════════════════════════════ */}
      <section className="relative w-full h-[360px] md:h-[440px] overflow-hidden">
        <Image
          src="/tentang_banner.jpg"
          alt="BAMcargo - Tim & operasional"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/20" />

        {/* Curved bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-background"
          style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col justify-center h-full max-w-2xl pt-10 pb-16">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 self-start
                         px-3 py-1.5 rounded-full
                         bg-white/10 backdrop-blur-sm
                         border border-white/20 mb-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                Profil Perusahaan
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-3">
              Tentang <span className="text-orange">BAM</span>
              <span className="text-white">cargo</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
              Sejak 2014, kami konsisten menghadirkan solusi pengiriman yang
              amanah, cepat, dan tepat ke seluruh penjuru Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT — Bento Grid ════════════════════════ */}
      <main className="max-w-7xl mx-auto px-6 space-y-4 pb-10">
        {/* ─── STATS Strip — overlap hero ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-16 relative z-20">
          {STATS.map((stat) => (
            <Card key={stat.label} className="shadow-sm bg-card">
              <CardContent className="p-4 flex flex-col gap-1.5">
                <div className="w-9 h-9 rounded-lg bg-orange-surface flex items-center justify-center">
                  <stat.Icon className="w-4 h-4 text-orange" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-foreground tabular-nums leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] md:text-xs text-muted-foreground font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ─── BENTO Grid: Sejarah + Misi ─── */}
        <div className="grid grid-cols-12 gap-3">
          {/* Sejarah — 7 kolom dengan foto */}
          <Card className="col-span-12 lg:col-span-7 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Foto */}
              <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto md:min-h-[300px] bg-muted">
                <Image
                  src="/about_office.jpg"
                  alt="Kantor BAMcargo Banjarmasin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

              {/* Teks */}
              <CardContent className="md:col-span-3 p-5 md:p-6 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-surface rounded-lg flex items-center justify-center flex-shrink-0">
                    <History className="text-orange w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-foreground leading-tight">
                      Sejarah Kami
                    </h2>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                      Since 2014
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Didirikan tahun 2014 di{" "}
                  <span className="font-bold text-foreground">Banjarmasin</span>
                  , PT Borneo Arta Mandiri (Bamcargo) telah bertransformasi
                  menjadi penyedia layanan pengiriman komprehensif yang
                  terpercaya.
                </p>

                {/* Lisensi badge */}
                <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                  <div className="w-9 h-9 bg-card rounded-md shadow-sm flex-shrink-0 flex items-center justify-center">
                    <ShieldCheck className="text-orange w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Izin Resmi POS Indonesia
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Lisensi No. 1440/2017
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Misi — 5 kolom navy */}
          <Card className="col-span-12 lg:col-span-5 bg-navy border-none shadow-sm overflow-hidden relative">
            <CardContent className="p-6 flex flex-col h-full gap-4 relative z-10">
              <div>
                <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-1.5">
                  Misi Kami
                </p>
                <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                  Lima prinsip yang kami jalankan setiap hari.
                </h2>
                <div className="h-0.5 w-12 bg-orange rounded-full mt-2" />
              </div>

              <ol className="space-y-2.5 flex-1">
                {MISSIONS.map((misi, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded
                                 bg-orange/20 text-orange
                                 flex items-center justify-center
                                 text-[10px] font-bold tabular-nums
                                 mt-0.5"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs md:text-sm text-white/70 leading-relaxed">
                      {misi}
                    </span>
                  </li>
                ))}
              </ol>
            </CardContent>

            {/* Subtle gradient */}
            <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-orange/5 blur-3xl pointer-events-none" />
          </Card>
        </div>

        {/* ─── VISI Quote ─── */}
        <Card className="shadow-sm bg-card overflow-hidden relative">
          <CardContent className="py-10 md:py-12 px-6 md:px-10 text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-3">
              Visi Kami
            </p>
            <blockquote className="text-xl md:text-3xl font-black text-foreground leading-tight tracking-tight">
              <span className="text-orange">"</span>
              Menjadi perusahaan jasa kiriman pilihan masyarakat yang amanah di
              Indonesia
              <span className="text-orange">"</span>
            </blockquote>
          </CardContent>

          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange/5 blur-3xl pointer-events-none" />
        </Card>

        {/* ─── VALUES — 3 cards ─── */}
        <div>
          <div className="flex items-end justify-between mb-3 gap-4 flex-wrap">
            <div>
              <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-1">
                Nilai Kami
              </p>
              <h2 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                Tiga kata yang kami pegang teguh.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {VALUES.map((item) => (
              <div key={item.title} className="col-span-12 md:col-span-4">
                <ValueCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA — compact ─── */}
       <AboutCTA />
      </main>
    </div>
  );
}