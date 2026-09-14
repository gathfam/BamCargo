import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const navLinks = [
  { label: "Halaman Utama", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Blog", href: "/blog" },
  { label: "Galeri", href: "/galeri" },
  { label: "Karir", href: "/karir" },
  { label: "Hubungi Kami", href: "/hubungi-kami" },
];

const services = [
  { label: "Cargo Pengiriman", href: "/#kalkulator" },
  { label: "Pengiriman Motor", href: "/#kalkulator" },
  { label: "Frozen Cargo", href: "/layanan/frozen-cargo" },
  { label: "Cek Resi", href: "/#cek-resi" },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com/bamcargo", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/bamcargo",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/bamcargo", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@bamcargo", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Image
              width={120}
              height={60}
              alt="BAM Cargo"
              src="/logo-Bam-Cargo-100.png"
              className="object-contain bg-white rounded p-2"
            />
            <p className="text-sm leading-relaxed text-neutral-400">
              PT BAM Cargo — Layanan logistik dan pengiriman barang terpercaya.
              Amanah, Cepat, dan Tepat ke seluruh Indonesia.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Layanan
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href + service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 hover:text-orange-500 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                <span>
                  Bumi Pemurus Permai
                  <br />
                  Jl. Raya Yudistira No. 36
                  <br />
                  Pemurus Dalam, Banjarmasin Selatan
                  <br />
                  Kalimantan Selatan 70248
                </span>
              </li>
              <li className="flex gap-3 text-sm text-neutral-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                <a
                  href="tel:+6281351895522"
                  className="hover:text-orange-500 transition-colors"
                >
                  0813-5189-5522
                </a>
              </li>
              <li className="flex gap-3 text-sm text-neutral-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                <a
                  href="mailto:bamcargo1975@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  bamcargo1975@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                <span>
                  Senin – Sabtu: 08.00 – 17.00
                  <br />
                  Minggu: Tutup
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 text-center md:text-left">
            © {year} PT BAM Cargo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <Link
              href="/kebijakan-privasi"
              className="hover:text-orange-500 transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="hover:text-orange-500 transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
