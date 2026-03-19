"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArticleService } from "@/services/articleService";
import { Card, CardContent } from "@/components/ui/card";
import { CreateArticleModal } from "@/components/admin/articles/create-article-modal";
import { ArticleTable } from "@/components/admin/articles/article-table";
import { ArticlePagination } from "@/components/admin/articles/article-pagination";

export default function ArticleManagement() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", page],
    queryFn: () => ArticleService.getArticle(page, limit),
    placeholderData: (prev) => prev,
  });

  console.log(data?.data)
  const articles = data?.data || [];
  const pagination = data?.pagination || { page: 1, totalPages: 1, total: 0 };

  return (
    <div className="bg-background">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Manajemen Artikel
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Kelola konten, berita, dan pembaruan logistik Bamcargo
            </p>
          </div>
          <CreateArticleModal />
        </div>

        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            <ArticleTable
              articles={articles}
              isLoading={isLoading}
              isError={isError}
              error={error}
            />
            <ArticlePagination
              page={page}
              setPage={setPage}
              totalPages={pagination.totalPages}
              total={pagination.total}
              hasData={!!data}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
