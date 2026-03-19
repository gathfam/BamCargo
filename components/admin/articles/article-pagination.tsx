"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: (val: number | ((prev: number) => number)) => void;
  totalPages: number;
  total: number;
  hasData: boolean;
}

export function ArticlePagination({
  page,
  setPage,
  totalPages,
  total,
  hasData,
}: PaginationProps) {
  return (
    <div className="px-6 py-4 bg-background border-t flex items-center justify-between">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        Halaman {page} dari {totalPages} (Total {total})
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
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
          onClick={() =>
            setPage((p) => (!hasData || p === totalPages ? p : p + 1))
          }
          disabled={!hasData || page >= totalPages}
          className="rounded-lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
