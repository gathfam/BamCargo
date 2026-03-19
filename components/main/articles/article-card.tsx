import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Article } from "@/types/api";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
  innerRef?: (node: HTMLDivElement | null) => void;
}

export function ArticleCard({ article, innerRef }: ArticleCardProps) {
  return (
    <Card
      ref={innerRef}
      className="relative group flex flex-col rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 p-0"
    >
      <CardContent className="p-0">
        <Link
          href={`/blog/${article.slug}`}
          className="absolute inset-0 z-10 focus:outline-none"
          aria-label={`Baca artikel ${article.title}`}
        />
        <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          {article.image_url ? (
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
              No Image
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 space-x-2">
            <time dateTime={article.created_at}>
              {format(new Date(article.created_at), "dd MMMM yyyy", {
                locale: localeId,
              })}
            </time>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors capitalize line-clamp-2 group-hover:text-red-600">
            {article.title}
          </h2>

          <div className="mt-auto flex items-center text-red-600 dark:text-red-500 font-bold text-sm">
            Baca selengkapnya
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
