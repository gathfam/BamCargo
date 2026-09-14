"use client";

import Link from "next/link";
import { Button } from "@bamcargo/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-160 md:h-200 overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero_banner.jpg"
        alt="Pengiriman BAM Cargo ke seluruh Indonesia"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/20" />

      {/* Curved bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-background z-20"
        style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
      />

      {/* Content */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center h-full max-w-2xl pt-20 pb-32">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Sejak 2014 · 4 Cabang Aktif
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
            Pengiriman Amanah,{" "}
            <span className="text-orange">Cepat &amp; Tepat</span> ke Seluruh
            Indonesia
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            Solusi logistik terpercaya untuk pengiriman barang, motor, dan
            kargo. Didukung ijin resmi penyelenggara pos (agen kurir) dari
            Komdigi &amp; jaringan cabang yang menjangkau pulau-pulau utama.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 px-7 font-bold bg-orange hover:bg-orange/90 text-white shadow-lg shadow-orange/30"
            >
              <Link href="#tracking">
                Lacak Kiriman
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 font-bold bg-white/10 hover:bg-white text-white hover:text-foreground border-white/30 backdrop-blur-sm"
            >
              <Link href="/hubungi-kami">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* No carousel indicators or controls needed */}
    </section>
  );
}
