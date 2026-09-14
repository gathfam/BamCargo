"use client";

import { Card, CardContent } from "@bamcargo/ui/card";
import { Button } from "@bamcargo/ui/button";
import {
  Snowflake,
  ThermometerSnowflake,
  CalendarClock,
  MapPinned,
  PackageCheck,
  ArrowRight,
  Truck,
  ShieldCheck,
  Activity,
  Beef,
  Fish,
  IceCream2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────
const SCHEDULE_DAYS = [
  { day: "S", active: false },
  { day: "S", active: false },
  { day: "R", active: true },
  { day: "K", active: false },
  { day: "J", active: true },
  { day: "S", active: false },
  { day: "M", active: false },
] as const;

const ROUTES = [
  { to: "Banjarmasin", days: "5-6", popular: true },
  { to: "Balikpapan", days: "6-7", popular: false },
  { to: "Samarinda", days: "6-7", popular: false },
  { to: "Pontianak", days: "5-6", popular: false },
] as const;

const PRODUCTS = [
  { name: "Daging", Icon: Beef, temp: "-18°" },
  { name: "Seafood", Icon: Fish, temp: "-20°" },
  { name: "Dairy", Icon: IceCream2, temp: "-25°" },
] as const;

const FEATURES: { title: string; desc: string; Icon: LucideIcon }[] = [
  { title: "Minimum Ringan", desc: "Tidak harus 1 kontainer full.", Icon: PackageCheck },
  { title: "Cold Storage", desc: "Gudang transit berpendingin.", Icon: Snowflake },
  { title: "Vacuum Sealed", desc: "Packaging aman & kedap.", Icon: ShieldCheck },
  { title: "Live Tracking", desc: "Pantau via WhatsApp.", Icon: Activity },
];

// ─── Page ─────────────────────────────────────────────────────
export default function FrozenCargoPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-4">
        {/* ═══ HEADER — compact inline ═════════════════════════ */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-2 border-b border-border">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-surface w-fit">
              <ThermometerSnowflake className="w-3 h-3 text-orange" />
              <span className="text-[10px] font-bold text-orange uppercase tracking-widest">
                BAM Cold Chain
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-[1.1]">
              Pengiriman <span className="text-orange">Beku & Segar</span> tetap prima sampai tujuan.
            </h1>
          </div>
          <p className="text-sm text-muted-foreground md:text-right md:max-w-xs">
            Spesialis cold chain Jakarta — Kalimantan dengan suhu terjaga.
          </p>
        </header>

        {/* ═══ BENTO HERO ══════════════════════════════════════ */}
        <div className="grid grid-cols-12 gap-4">
          {/* ─── 1. MAIN — Navy compact ─── */}
          <Card className="col-span-12 lg:col-span-8 bg-navy border-none rounded-2xl overflow-hidden relative">
            <CardContent className="p-6 md:p-7 relative z-10 space-y-5">
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Live Monitoring
                  </span>
                </div>
                <p className="font-mono text-xs text-white/60">
                  ID: <span className="text-white/90">BAM-RF-2401</span>
                </p>
              </div>

              {/* Heading */}
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl md:text-4xl font-black text-white leading-[1.05] tracking-tight">
                  Kirim frozen food{" "}
                  <span className="text-orange">tanpa cemas cair.</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Reefer container standar internasional, kontrol suhu real-time.
                </p>
              </div>

              {/* Product temp grid — compact */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {PRODUCTS.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <p.Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                        {p.name}
                      </p>
                      <p className="font-mono text-sm font-bold text-white tabular-nums">
                        {p.temp}C
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Decorative dot pattern */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.05]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
            <Snowflake
              className="absolute -right-10 -bottom-10 text-white/[0.04] w-56 h-56 rotate-12 pointer-events-none"
              strokeWidth={1}
            />
          </Card>

          {/* ─── 2. TEMPERATURE — Orange compact ─── */}
          <Card className="col-span-12 sm:col-span-6 lg:col-span-4 bg-orange border-none rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-white" strokeWidth={2.5} />
                  <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">
                    Operating Temp
                  </span>
                </div>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider px-2 py-0.5 bg-white/15 rounded">
                  Live
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tight tabular-nums leading-none">
                  -20
                </span>
                <span className="text-2xl font-bold text-white/80">°C</span>
              </div>

              {/* Temperature bar */}
              <div className="space-y-1.5">
                <div className="h-1.5 bg-white/15 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{ width: "33%" }} />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-orange"
                    style={{ left: "calc(33% - 5px)" }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-white/60 font-mono">
                  <span>-30°</span>
                  <span>0°</span>
                  <span>+30°</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ─── 3. SCHEDULE — compact day picker ─── */}
          <Card className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-surface flex items-center justify-center">
                    <CalendarClock className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-foreground">Jadwal Berangkat</h3>
                    <p className="text-[11px] text-muted-foreground">
                      <span className="font-bold text-foreground">2×</span> seminggu
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {SCHEDULE_DAYS.map((d, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md flex items-center justify-center text-[11px] font-bold ${
                      d.active
                        ? "bg-navy text-white"
                        : "bg-muted text-muted-foreground/50"
                    }`}
                  >
                    {d.day}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-muted-foreground">
                <span className="text-navy font-bold">Rabu</span> &amp;{" "}
                <span className="text-navy font-bold">Jumat</span> ex Jakarta
              </p>
            </CardContent>
          </Card>

          {/* ─── 4. ROUTES — list compact ─── */}
          <Card className="col-span-12 lg:col-span-8 rounded-2xl">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-surface flex items-center justify-center">
                    <MapPinned className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-foreground">Rute Cold Chain</h3>
                    <p className="text-[11px] text-muted-foreground">
                      Ex Jakarta → Kalimantan
                    </p>
                  </div>
                </div>
                <Truck className="w-5 h-5 text-muted-foreground/30" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {ROUTES.map((route, idx) => (
                  <div
                    key={route.to}
                    className="p-3 rounded-lg bg-muted/50 border border-border space-y-1 relative"
                  >
                    {route.popular && (
                      <span className="absolute top-2 right-2 text-[8px] font-bold text-orange bg-orange-surface px-1.5 py-0.5 rounded uppercase tracking-wider">
                        Top
                      </span>
                    )}
                    <p className="font-mono text-[10px] text-muted-foreground tabular-nums">
                      0{idx + 1}
                    </p>
                    <p className="font-bold text-sm text-foreground truncate">
                      {route.to}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono tabular-nums">
                      {route.days} hari
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ═══ WHY US + CTA ═══════════════════════════════════ */}
        <div className="grid grid-cols-12 gap-4">
          {/* Features — 2x2 grid compact */}
          <Card className="col-span-12 lg:col-span-8 rounded-2xl">
            <CardContent className="p-6 md:p-7 space-y-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-1">
                    Why Us
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                    Dipercaya UMKM kuliner &amp; restoran.
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  04 keunggulan
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map((f, idx) => (
                  <div
                    key={f.title}
                    className="flex gap-3 p-3 rounded-lg bg-muted/40 border border-border"
                  >
                    <div className="w-9 h-9 rounded-md bg-orange-surface flex items-center justify-center flex-shrink-0">
                      <f.Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[9px] text-muted-foreground tabular-nums">
                          0{idx + 1}
                        </span>
                        <h4 className="font-bold text-foreground text-xs truncate">
                          {f.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-[11px] leading-snug">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA — navy compact */}
          <Card className="col-span-12 lg:col-span-4 bg-navy border-none rounded-2xl overflow-hidden relative">
            <CardContent className="p-6 h-full flex flex-col justify-between gap-4 relative z-10 min-h-[220px]">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                  <span className="h-1 w-1 rounded-full bg-orange animate-pulse" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    Promo Mingguan
                  </span>
                </div>
                <h3 className="text-xl font-black text-white leading-tight">
                  Mulai kirim hari ini.
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  Tarif khusus untuk pengiriman rutin.
                </p>
              </div>

              <Button
                asChild
                className="w-full h-10 bg-orange hover:bg-white text-white hover:text-navy font-bold rounded-lg group text-sm"
              >
                <Link href="https://wa.me/6281351895522" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </CardContent>

            <svg
              className="absolute top-0 right-0 w-24 h-full pointer-events-none opacity-15"
              viewBox="0 0 100 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M 80 0 Q 20 100 80 200 Q 140 300 80 400" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="80" cy="0" r="2.5" fill="white" />
              <circle cx="80" cy="200" r="2.5" fill="white" />
              <circle cx="80" cy="400" r="2.5" fill="white" />
            </svg>
          </Card>
        </div>
      </main>
    </div>
  );
}