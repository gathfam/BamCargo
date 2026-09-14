"use client";

import { Suspense, useState, useRef, useCallback, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { ArticleService } from "@bamcargo/core";
import { Badge } from "@bamcargo/ui/badge";
import { X } from "lucide-react";
import { ArticleCard } from "@/components/main/articles/article-card";
import { ArticleHeader } from "@/components/main/articles/article-header";
import {
  ArticleEmpty,
  ArticleError,
  ArticleLoading,
  LoadMoreButton,
} from "@/components/main/articles/article-state-ui";

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogFallback />}>
      <BlogContent />
    </Suspense>
  );
}

function BlogFallback() {
  return (
    <div className="bg-background min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleHeader />
        <ArticleLoading />
      </main>
    </div>
  );
}

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tag = searchParams.get("tag")?.trim() || undefined;

  return (
    <div className="bg-background min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleHeader />

        {tag && (
          <div className="mb-8 flex items-center gap-3">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Filter:
            </span>
            <Badge
              variant="secondary"
              className="gap-1 pl-3 pr-1 py-1 text-sm font-medium"
            >
              #{tag}
              <button
                type="button"
                onClick={() => router.push("/blog")}
                className="rounded-full hover:bg-background/50 p-0.5 ml-1"
                aria-label="Hapus filter"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          </div>
        )}

        <BlogList key={tag ?? "all"} tag={tag} />
      </main>
    </div>
  );
}

function BlogList({ tag }: { tag: string | undefined }) {
  const [limit, setLimit] = useState(6);
  const [isDelaying, setIsDelaying] = useState(false);

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["articles", "public", tag ?? "all", limit],
    queryFn: () => ArticleService.listPublic({ page: 1, limit, tag }),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data ?? [];
  const totalArticles = data?.pagination?.total ?? 0;
  const hasMore = articles.length < totalArticles;

  const observer = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const loadMoreWithDelay = useCallback(() => {
    if (isDelaying || isFetching) return;

    setIsDelaying(true);
    timeoutRef.current = setTimeout(() => {
      setLimit((prev) => prev + 3);
      setIsDelaying(false);
    }, 2500);
  }, [isDelaying, isFetching]);

  const lastArticleElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || isFetching || isDelaying) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreWithDelay();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetching, isDelaying, hasMore, loadMoreWithDelay],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isLoading) return <ArticleLoading />;
  if (isError) return <ArticleError />;
  if (articles.length === 0) return <ArticleEmpty />;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => {
          const isLast = index === articles.length - 1;
          return (
            <ArticleCard
              key={article.id}
              article={article}
              innerRef={isLast ? lastArticleElementRef : undefined}
            />
          );
        })}
      </div>

      {hasMore && (
        <LoadMoreButton
          onClick={loadMoreWithDelay}
          isFetching={isFetching}
          isDelaying={isDelaying}
        />
      )}
    </>
  );
}