"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const addresses = [
  {
    city: "Banjarmasin (Pusat)",
    address:
      "Bumi Pemurus Permai Jl. Raya Yudistira No.36, Pemurus Dalam, Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan 70248",
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

const phoneNumbers = [
  { area: "Banjarmasin (Pusat)", number: "081351895522" },
  { area: "Jakarta", number: "081351895522" },
  { area: "Surabaya", number: "08563541973" },
  { area: "Banjar Baru", number: "0811500895" },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#211112] min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <Card>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Kami siap membantu kebutuhan logistik dan pengiriman barang Anda
              ke seluruh Indonesia.
            </p>
          </div>
        </Card>

        {/* Map Section */}
        <div className="w-full h-[450px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 relative">
          <iframe
            src="https://maps.google.com/maps?q=Bumi+Pemurus+Permai+Jl.+Raya+Yudistira+No.36,+Banjarmasin&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Lokasi Bamcargo Banjarmasin"
          ></iframe>
        </div>

        {/* Addresses Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 rounded-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Alamat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((item, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.city}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.address}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 rounded-xl">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Kontak
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone List */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Telepon
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <li
                      key={index}
                      className="text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-slate-900 dark:text-slate-300">
                        {phone.number}
                      </span>
                      <span className="text-sm opacity-80">{phone.area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Email
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  You can email us at
                </p>
                <a
                  href="mailto:bamcargo1975@gmail.com"
                  className="text-red-600 dark:text-red-500 font-bold hover:underline break-all"
                >
                  bamcargo1975@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    WhatsApp
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  Chat dengan CS kami
                </p>
                <a
                  href="https://wa.me/628998020606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-500 font-bold hover:underline text-xl"
                >
                  +62 899-8020-606
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
