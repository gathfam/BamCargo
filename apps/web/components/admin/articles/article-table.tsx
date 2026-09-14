"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@bamcargo/ui/table";
import { Badge } from "@bamcargo/ui/badge";
import { Button } from "@bamcargo/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { getImageUrl, type ArticleListItem } from "@bamcargo/core";
import { DeleteArticleAlert } from "./delete-article-alert";
import Image from "next/image";

interface ArticleTableProps {
  articles: ArticleListItem[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function ArticleTable({ articles }: ArticleTableProps) {
  return (
    <Table>
      <TableHeader className="bg-background">
        <TableRow className="border-b hover:bg-transparent">
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
            Judul Artikel
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[180px]">
            Tag
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[120px]">
            Status
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[140px]">
            Tanggal
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs text-right w-[120px]">
            Aksi
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y">
        {articles.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="h-32 text-center text-slate-500">
              Belum ada artikel.
            </TableCell>
          </TableRow>
        ) : (
          articles.map((article) => {
            const imageUrl = getImageUrl(article.image_url);

            return (
              <TableRow
                key={article.id}
                className="transition-colors border-none"
              >
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-14 rounded-lg flex-shrink-0 overflow-hidden border bg-slate-100 dark:bg-slate-800 relative">
                      <Image
                        className="object-cover"
                        src={imageUrl}
                        alt={article.title}
                        fill
                        sizes="80px"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                      {article.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5">
                  {article.tags && article.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          #{tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </TableCell>
                <TableCell className="px-6 py-5">
                  {article.isPublished ? (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold border-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      Published
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-bold border-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                      Draft
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="px-6 py-5 text-sm text-slate-500 dark:text-slate-400">
                  {formatDate(article.created_at)}
                </TableCell>
                <TableCell className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="ghost" size="icon" title="Edit">
                      <Link href={`/admin/artikel/${article.id}/edit`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteArticleAlert articleId={article.id} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
}
