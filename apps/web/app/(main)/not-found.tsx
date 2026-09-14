import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { Button } from "@bamcargo/ui";

export default function NotFound() {
  return (
    <main className="min-h-[calc(104vh-80px)] bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex rounded-2xl items-center justify-center w-16 h-16 bg-orange-600/10 mb-6">
          <Wrench className="w-8 h-8 text-orange" strokeWidth={2} />
        </div>

        {/* Badge */}

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Sedang Dalam <span className="text-orange">Pengerjaan</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg mb-10 leading-relaxed">
          Halaman ini sedang kami siapkan untuk memberikan pengalaman terbaik.
          Nantikan update selanjutnya dari BAM Cargo.
        </p>

        {/* CTA */}
        <Button type="submit" size="lg">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <Link href="/" className="">
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </main>
  );
}
