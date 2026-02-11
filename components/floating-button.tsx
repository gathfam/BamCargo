import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

<div className="fixed bottom-8 right-8 z-40">
  <Button className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-2xl group relative p-0">
    <MessageCircle className="w-6 h-6 text-white" />
    <div className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200 dark:border-slate-700 pointer-events-none whitespace-nowrap">
      Butuh Bantuan? Hubungi CS
    </div>
  </Button>
</div>;
