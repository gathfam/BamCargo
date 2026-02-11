import { Truck } from "lucide-react";
import Link from "next/link";

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded flex items-center justify-center">
                <Truck className="text-white dark:text-slate-900 w-4 h-4" />
              </div>
              <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                Bamcargo
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <Link href="#" className="text-xs font-bold text-rose-600">Tentang Kami</Link>
              <Link href="#" className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors">API Developer</Link>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © 2024 PT Borneo Arta Mandiri
            </p>
          </div>
        </div>
      </footer>