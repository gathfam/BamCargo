import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server";
import type { GalleryFilters } from "@bamcargo/core/types/gallery-types";
import { GalleryTable } from "@/components/admin/gallery/gallery-table";
import { GalleryPagination } from "@/components/admin/gallery/gallery-pagination";
import { Button } from "@bamcargo/ui/button";
import { Card, CardContent } from "@bamcargo/ui/card";
import Link from "next/link";
import { Plus } from "lucide-react";
import { BackButton } from "@/components/admin/back-button";
import { GalleryFilter } from "@/components/admin/gallery/gallery-filter";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    is_active?: string;
    category?: string;
  }>;
}

export default async function GalleryAdminPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);

  const isActiveFilter =
    params.is_active === "true"
      ? true
      : params.is_active === "false"
        ? false
        : undefined;

  const filters: GalleryFilters = {
    page,
    limit: 20,
    ...(isActiveFilter !== undefined && { is_active: isActiveFilter }),
    ...(params.category && { category: params.category }),
  };

  let galleryData;
  try {
    galleryData = await GalleryServerService.list(filters);
  } catch (error) {
    console.error("[GalleryAdminPage] failed to fetch:", error);
    galleryData = {
      data: [],
      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      },
    };
  }

  return (
    <div className="bg-background">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="mb-6">
          <BackButton fallbackHref="/admin" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Kelola Galeri</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Dokumentasi operasional dan kegiatan BAM Cargo
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/gallery/new">
              <Plus className="mr-2 h-4 w-4" />
              Foto Baru
            </Link>
          </Button>
        </div>

        <div className="mb-4">
          <GalleryFilter
            currentStatus={params.is_active}
            currentCategory={params.category}
          />
        </div>

        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            <GalleryTable items={galleryData.data} />
            {galleryData.pagination.totalPages > 1 && (
              <GalleryPagination
                page={galleryData.pagination.page}
                totalPages={galleryData.pagination.totalPages}
                total={galleryData.pagination.total}
                hasNext={galleryData.pagination.hasNext}
                hasPrev={galleryData.pagination.hasPrev}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
