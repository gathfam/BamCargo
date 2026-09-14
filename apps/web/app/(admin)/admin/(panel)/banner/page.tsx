import { BannerServerService } from "@bamcargo/core/services/banner-service-server";
import type { BannerFilters } from "@bamcargo/core/types/banner-types";
import { BannerTable } from "@/components/admin/banners/banner-table";
import { BannerPagination } from "@/components/admin/banners/banner-pagination";
import { Button } from "@bamcargo/ui/button";
import { Card, CardContent } from "@bamcargo/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bamcargo/ui/select";
import Link from "next/link";
import { Plus } from "lucide-react";
import { BackButton } from "@/components/admin/back-button";
import { BannerFilter } from "@/components/admin/banners/banner-filter";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    is_active?: string;
  }>;
}

export default async function BannerAdminPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const isActiveFilter =
    params.is_active === "true"
      ? true
      : params.is_active === "false"
        ? false
        : undefined;

  const filters: BannerFilters = {
    page,
    limit: 20,
    ...(isActiveFilter !== undefined && { is_active: isActiveFilter }),
  };

  let bannersData;
  try {
    bannersData = await BannerServerService.list(filters);
  } catch (error) {
    console.error("[BannerAdminPage] failed to fetch:", error);
    bannersData = {
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
          <BackButton fallbackHref="/admin/banner" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Kelola Banner</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Banner yang tampil di carousel homepage
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/banner/new">
              <Plus className="mr-2 h-4 w-4" />
              Banner Baru
            </Link>
          </Button>
        </div>

        {/* Filter */}
        <div className="mb-4">
          <BannerFilter currentFilter={params.is_active} />
        </div>

        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            <BannerTable banners={bannersData.data} />
            {bannersData.pagination.totalPages > 1 && (
              <BannerPagination
                page={bannersData.pagination.page}
                totalPages={bannersData.pagination.totalPages}
                total={bannersData.pagination.total}
                hasNext={bannersData.pagination.hasNext}
                hasPrev={bannersData.pagination.hasPrev}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}