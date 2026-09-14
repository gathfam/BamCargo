"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Headphones,
  Building2,
  Clock,
  Send,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@bamcargo/ui/button";
import { Card, CardContent } from "@bamcargo/ui/card";
import ContactCTA from "@/components/main/contact-cta";

// ─── Types ────────────────────────────────────────────────────
interface AddressItem {
  city: string;
  address: string;
  isMain?: boolean;
}

interface PhoneItem {
  area: string;
  number: string;
}

// ─── Constants ────────────────────────────────────────────────
const ADDRESSES: AddressItem[] = [
  {
    city: "Banjarmasin (Pusat)",
    address:
      "Bumi Pemurus Permai Jl. Raya Yudistira No.36, Pemurus Dalam, Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan 70248",
    isMain: true,
  },
  {
    city: "Jakarta",
    address:
      "Jl. Swadaya Raya No.09, RT.4/RW.3, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13180",
  },
  {
    city: "Surabaya",
    address:
      "Jl. Delta Sari Indah Blok O No. 64, Koreksari, Kureksari, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
  },
  {
    city: "Banjar Baru",
    address:
      "Karang Anyar 1 Komplek Pondok Raya 1 Toko nomor 1a RT.09, Guntung Payung, Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70714",
  },
];

const PHONES: PhoneItem[] = [
  { area: "Banjarmasin", number: "0813-5189-5522" },
  { area: "Jakarta", number: "0813-5189-5522" },
  { area: "Surabaya", number: "0856-3541-973" },
  { area: "Banjar Baru", number: "0811-500-895" },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=Bumi+Pemurus+Permai+Jl.+Raya+Yudistira+No.36,+Banjarmasin&t=&z=15&ie=UTF8&iwloc=&output=embed";

const MAP_LINK =
  "https://maps.google.com/?q=Bumi+Pemurus+Permai+Jl.+Raya+Yudistira+No.36,+Banjarmasin";

// ─── Page ─────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* ─── Page Title (no hero, small inline) ──────────── */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-surface mb-4">
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            <span className="text-xs font-bold text-orange uppercase tracking-widest">
              Hubungi Kami
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
              Mari <span className="text-navy dark:text-white">Ter</span>
              <span className="text-orange">hubung</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:max-w-md">
              Tim kami siap membantu kebutuhan logistik Anda di empat cabang
              strategis di Indonesia.
            </p>
          </div>
        </div>

        {/* ═══ BENTO GRID ══════════════════════════════════════ */}
        <div className="grid grid-cols-12 gap-4">
          {/* ─── 1. MAP — 7 kolom ─── */}
          <Card className="col-span-12 lg:col-span-7 shadow-sm overflow-hidden">
            <div className="w-full h-[380px] lg:h-[480px] relative bg-muted">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Lokasi Bamcargo Banjarmasin"
              />
            </div>
          </Card>

          {/* ─── 2. KANTOR PUSAT — 5 kolom navy ─── */}
          <Card className="col-span-12 lg:col-span-5 bg-navy border-none shadow-sm overflow-hidden relative">
            <CardContent className="p-8 flex flex-col h-full gap-6 relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-orange w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    Kantor Pusat
                  </h2>
                  <p className="text-xs font-bold text-orange uppercase tracking-widest mt-0.5">
                    Banjarmasin
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    Bumi Pemurus Permai Jl. Raya Yudistira No.36, Pemurus Dalam,
                    Banjarmasin Selatan, Kalimantan Selatan 70248
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                  <a
                    href="tel:081351895522"
                    className="text-white font-bold hover:text-orange transition-colors"
                  >
                    0813-5189-5522
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-bold">
                      Senin – Sabtu
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      08:00 — 17:00 WITA
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button
                asChild
                className="w-full h-12 font-bold bg-orange hover:bg-white hover:text-navy text-white transition-colors duration-200 "
              >
                <Link href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                  Buka di Google Maps
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>

            {/* Decorative icon (mirip About) */}
            <Building2
              className="absolute -right-12 -bottom-12 text-white/5 w-64 h-64 rotate-12 pointer-events-none"
              strokeWidth={1}
            />
          </Card>

          {/* ─── 3. ALAMAT CABANG — 4 cards (mirip Values About) ─── */}
          {ADDRESSES.map((item, idx) => (
            <Card
              key={item.city}
              className="col-span-12 md:col-span-6 shadow-sm bg-card border"
            >
              <CardContent className="p-8 flex flex-col h-full gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-surface flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">
                        Cabang 0{idx + 1}
                      </p>
                      <h3 className="text-lg font-black text-foreground">
                        {item.city.replace(" (Pusat)", "")}
                      </h3>
                    </div>
                  </div>
                  {item.isMain && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange bg-orange-surface px-2.5 py-1 rounded-full flex-shrink-0">
                      Pusat
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.address}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* ─── 4. SALURAN KONTAK — 3 cards (mirip Values About) ─── */}
          {/* Section sub-heading */}
          <div className="col-span-12 mt-4">
            <p className="text-xs font-bold text-orange uppercase tracking-widest mb-1">
              Saluran Kontak
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
              Pilih cara yang paling nyaman untuk Anda.
            </h2>
          </div>

          {/* TELEPON — default card */}
          <Card className="col-span-12 md:col-span-4 shadow-sm bg-card border">
            <CardContent className="p-8 flex flex-col h-full gap-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-surface flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange" />
              </div>

              <div>
                <h4 className="font-black text-xl mb-1 text-foreground">
                  Telepon
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Hubungi cabang terdekat di kota Anda.
                </p>
              </div>

              <ul className="space-y-2 mt-auto pt-2 border-t border-border">
                {PHONES.map((p, i) => (
                  <li key={i}>
                    <a
                      href={`tel:${p.number.replace(/-/g, "")}`}
                      className="flex items-center justify-between py-1.5 group"
                    >
                      <span className="font-mono text-sm font-semibold text-foreground group-hover:text-orange transition-colors tabular-nums">
                        {p.number}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {p.area}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* EMAIL — navy card (mirip Professional di About) */}
          <Card className="col-span-12 md:col-span-4 bg-navy border-none shadow-sm overflow-hidden relative">
            <CardContent className="p-8 flex flex-col h-full gap-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>

              <div>
                <h4 className="font-black text-xl mb-1 text-white">Email</h4>
                <p className="text-sm leading-relaxed text-white/70">
                  Untuk pertanyaan resmi, kerjasama korporat, atau permintaan
                  penawaran khusus. Respons dalam 1×24 jam.
                </p>
              </div>

              <a
                href="mailto:bamcargo1975@gmail.com"
                className="mt-auto inline-flex items-center justify-between gap-2 px-4 py-3  bg-white/10 hover:bg-orange transition-colors group rounded-md"
              >
                <span className="text-white font-bold text-sm font-mono break-all">
                  bamcargo1975@gmail.com
                </span>
                <Send className="w-4 h-4 text-white flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </CardContent>

            {/* Decorative icon */}
            <Mail
              className="absolute -right-10 -bottom-10 text-white/5 w-52 h-52 rotate-12 pointer-events-none"
              strokeWidth={1}
            />
          </Card>

          {/* WHATSAPP — orange card (mirip Cepat di About) */}
          <Card className="col-span-12 md:col-span-4 bg-orange border-none shadow-sm overflow-hidden relative">
            <CardContent className="p-8 flex flex-col h-full gap-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <div>
                <h4 className="font-black text-xl mb-1 text-white">WhatsApp</h4>
                <p className="text-sm leading-relaxed text-white/80">
                  Cara tercepat untuk tracking, pricing, dan booking. Tim CS
                  online setiap hari.
                </p>
              </div>

              <Button
                asChild
                className="mt-auto w-full h-12 font-bold bg-white hover:bg-navy text-orange hover:text-white transition-colors duration-200 "
              >
                <Link
                  href="https://wa.me/628998020606"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 899-8020-606
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>

            {/* Decorative icon */}
            <MessageCircle
              className="absolute -right-10 -bottom-10 text-white/10 w-52 h-52 rotate-12 pointer-events-none"
              strokeWidth={1}
            />
          </Card>
          
          
       
        </div>
      </main>
    </div>
  );
}
