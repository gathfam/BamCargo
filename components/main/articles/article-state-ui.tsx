import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ArticleLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-10 h-10 animate-spin text-red-600 mb-4" />
      <p className="text-slate-500 font-medium">Memuat artikel...</p>
    </div>
  );
}

export function ArticleError() {
  return (
    <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-red-200 dark:border-red-900/50 shadow-sm">
      <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
        Gagal Memuat Data
      </h3>
      <p className="text-slate-500 dark:text-slate-400">
        Terjadi kesalahan saat mengambil artikel. Silakan coba lagi nanti.
      </p>
    </div>
  );
}

export function ArticleEmpty() {
  return (
    <div className="text-center py-20 bg-white dark:bg-slate-900 shadow-sm rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        Belum ada artikel
      </h3>
      <p className="text-slate-500 dark:text-slate-400">
        Artikel dan berita terbaru akan segera hadir di sini.
      </p>
    </div>
  );
}

export function LoadMoreButton({
  onClick,
  isFetching,
  isDelaying,
}: {
  onClick: () => void;
  isFetching: boolean;
  isDelaying: boolean;
}) {
  if (isFetching || isDelaying) {
    return (
      <div className="flex flex-col items-center justify-center py-10 mt-4">
        <Loader2 className="w-8 h-8 animate-spin text-red-600 mb-2" />
        <p className="text-slate-500 font-medium text-sm">
          Memuat artikel selanjutnya...
        </p>
      </div>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full mt-12 rounded-xl"
    >
      Tampilkan lebih banyak
    </Button>
  );
}
