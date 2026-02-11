import { Building2, Globe, Motorbike, ShieldCheck, Truck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeatureCard() {
  return (
    <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
      <div className="group relative flex h-[200px] flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-br from-rose-600 to-rose-700 p-6 text-white shadow-md border border-rose-300 dark:border-rose-900">
        <div className="relative z-10">
          <h4 className="mb-2 text-2xl font-black leading-tight">
            Asuransi <br />
            Pengiriman
          </h4>
          <p className="mb-6 max-w-[240px] text-sm opacity-90">
            Proteksi ekstra untuk kenyamanan dan keamanan barang berharga Anda.
          </p>
          <Button
            variant={"outline"}
            asChild
            className="border border-white/30 bg-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/30 hover:text-white! h-12"
          >
            <Link href={"#"}>Pelajari Detail</Link>
          </Button>
        </div>
        <ShieldCheck
          className="absolute -bottom-4 -right-4 text-white/10 transition-transform group-hover:scale-110"
          size={180}
        />
      </div>

      <div className="group relative flex h-[200px] flex-col justify-center overflow-hidden rounded-xl bg-slate-800 p-6 text-white shadow-md dark:bg-slate-900 border border-slate-300 dark:border-slate-900">
        <div className="relative z-10">
          <h4 className="mb-2 text-2xl font-black leading-tight">
            Cek Area <br />
            Layanan
          </h4>
          <p className="mb-6 max-w-[240px] text-sm opacity-90">
            Jangkauan logistik terluas ke seluruh wilayah di Indonesia.
          </p>
          <Button
            variant={"outline"}
            asChild
            className="border border-white/30 bg-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/30 hover:text-white! h-12"
          >
            <Link href={"#"}>Lihat Peta Jangkauan</Link>
          </Button>
        </div>
        <Globe
          className="absolute -bottom-4 -right-4 text-white/10 transition-transform group-hover:scale-110"
          size={180}
        />
      </div>
    </div>
  );
}
