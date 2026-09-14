import { ArticleServerService } from "@bamcargo/core/services/article-service-server"
import type { ArticleFilters } from "@bamcargo/core/types/article-types"
import { ArticleTable } from "@/components/admin/articles/article-table"
import { ArticlePagination } from "@/components/admin/articles/article-pagination"
import { ArticleFilter } from "@/components/admin/articles/article-filter"
import { Button } from "@bamcargo/ui/button"
import { Card, CardContent } from "@bamcargo/ui/card"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { BackButton } from "@/components/admin/back-button"

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    status?: string;
    tag?: string;
  }>;
}

export default async function ArticleManagementPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const status =
    params.status === "published" || params.status === "draft"
      ? params.status
      : undefined;
  const tag = params.tag?.trim() || undefined;

  const filters: ArticleFilters = {
    page,
    limit: 10,
    ...(status && { status }),
    ...(tag && { tag }),
  };

  let articlesData;
  try {
    articlesData = await ArticleServerService.list(filters);
  } catch (error) {
    console.error("[ArticleManagementPage] failed to fetch:", error);
    articlesData = {
      data: [],
      pagination: {
        page: 1,
        limit: 10,
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
          <BackButton fallbackHref="/admin/dashboard" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Manajemen Artikel
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Kelola konten, berita, dan pembaruan logistik Bamcargo
            </p>
          </div>
          <Button asChild className="flex items-center gap-2">
            <Link href="/admin/artikel/new">
              <PlusCircle className="w-5 h-5" />
              Tambah Artikel Baru
            </Link>
          </Button>
        </div>

        <div className="mb-4">
          <ArticleFilter currentStatus={status} />
        </div>

        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            <ArticleTable articles={articlesData.data} />
            {articlesData.pagination.totalPages > 1 && (
              <ArticlePagination
                page={articlesData.pagination.page}
                totalPages={articlesData.pagination.totalPages}
                total={articlesData.pagination.total}
                hasNext={articlesData.pagination.hasNext}
                hasPrev={articlesData.pagination.hasPrev}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}