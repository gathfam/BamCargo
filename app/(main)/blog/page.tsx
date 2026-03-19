"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ArticleService } from "@/services/articleService";
import { useState, useRef, useCallback, useEffect } from "react";
import { ArticleCard } from "@/components/main/articles/article-card";
import { ArticleHeader } from "@/components/main/articles/article-header";
import {
  ArticleEmpty,
  ArticleError,
  ArticleLoading,
  LoadMoreButton,
} from "@/components/main/articles/article-state-ui";

export default function BlogPage() {
  const [limit, setLimit] = useState(6);
  const [isDelaying, setIsDelaying] = useState(false);

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["articles", 1, limit],
    queryFn: () => ArticleService.getArticle(1, limit),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data || [];
  const totalArticles = data?.pagination?.total || 0;
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

  return (
    <div className="bg-background min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleHeader />

        {isLoading ? (
          <ArticleLoading />
        ) : isError ? (
          <ArticleError />
        ) : articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any, index: number) => {
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
        ) : (
          <ArticleEmpty />
        )}
      </main>
    </div>
  );
}
