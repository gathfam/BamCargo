"use client";

import { Button } from "@bamcargo/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface BannerPaginationProps {
  page: number;
  totalPages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export function BannerPagination({
  page,
  totalPages,
  total,
  hasNext,
  hasPrev,
}: BannerPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (target: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(target));
    router.push(`/admin/banner?${params.toString()}`);
  };

  return (
    <div className="px-6 py-4 bg-background border-t flex items-center justify-between">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        Halaman {page} dari {totalPages} (Total {total})
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(page - 1)}
          disabled={!hasPrev}
          className="rounded-lg"
        >
          Previous
        </Button>
        <Button
          variant="default"
          size="sm"
          className="rounded-lg pointer-events-none"
        >
          {page}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(page + 1)}
          disabled={!hasNext}
          className="rounded-lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
}