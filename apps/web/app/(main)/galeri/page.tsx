import { Suspense } from "react";
import type { Metadata } from "next";
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server";
import { GalleryHeader } from "@/components/main/gallery/gallery-header";
import { GalleryGrid } from "@/components/main/gallery/gallery-grid";
import { GalleryCategoryFilter } from "@/components/main/gallery/gallery-category-filter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi kegiatan operasional, armada, dan momen penting dari perjalanan BAM Cargo melayani Indonesia.",
};

interface PageProps {
  searchParams: Promise<{ category?: string; page?: string }>;
}

export default async function GaleriPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const category = params.category?.trim() || undefined;
  const page = parseInt(params.page ?? "1", 10);

  let galleryData;
  try {
    galleryData = await GalleryServerService.listPublic({
      category,
      page,
      limit: 24,
    });
  } catch {
    galleryData = {
      data: [],
      pagination: {
        page: 1,
        limit: 24,
        total: 0,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      },
    };
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryHeader />

        <Suspense>
          <GalleryCategoryFilter currentCategory={category} />
        </Suspense>

        <GalleryGrid items={galleryData.data} />

        {galleryData.pagination.totalPages > 1 && (
          <GalleryPagination
            page={galleryData.pagination.page}
            totalPages={galleryData.pagination.totalPages}
            total={galleryData.pagination.total}
            category={category}
          />
        )}
      </main>
    </div>
  );
}

function GalleryPagination({
  page,
  totalPages,
  total,
  category,
}: {
  page: number;
  totalPages: number;
  total: number;
  category?: string;
}) {
  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    params.set("page", String(p));
    if (category) params.set("category", category);
    return `/galeri?${params.toString()}`;
  };

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  return (
    <div className="mt-12 flex flex-col items-center gap-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Halaman {page} dari {totalPages} · {total} foto
      </p>
      <div className="flex items-center gap-2">
        <a
          href={buildHref(page - 1)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          aria-disabled={isPreviousDisabled}
        >
          ← Sebelumnya
        </a>
        <a
          href={buildHref(page + 1)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          aria-disabled={isNextDisabled}
        >
          Selanjutnya →
        </a>
      </div>
    </div>
  );
}
