"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { EditArticleModal } from "./edit-article-modal";
import { DeleteArticleAlert } from "./delete-article-alert";


interface ArticleTableProps {
  articles: any[];
  isLoading: boolean;
  isError: boolean;
  error: any
}

export function ArticleTable({
  articles,
  isLoading,
  isError,
  error
}: ArticleTableProps) {
  return (
    <Table>
      <TableHeader className="bg-background">
        <TableRow className="border-b hover:bg-transparent">
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
            Judul Artikel
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[150px]">
            Status
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[150px]">
            Tanggal
          </TableHead>
          <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs text-right w-[120px]">
            Aksi
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y">
        {isLoading && articles.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="h-32 text-center">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-slate-500" />
            </TableCell>
          </TableRow>
        ) : isError ? (
          <TableRow>
            <TableCell
              colSpan={4}
              className="h-32 text-center text-red-500 font-medium"
            >
              Gagal mengambil data.
              <span>{error}</span>
            </TableCell>
          </TableRow>
        ) : articles.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="h-32 text-center text-slate-500">
              Belum ada artikel.
            </TableCell>
          </TableRow>
        ) : (
          articles.map((article) => (
            <TableRow
              key={article.id}
              className="transition-colors border-none"
            >
              <TableCell className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden border">
                    <img
                      className="w-full h-full object-cover"
                      src={article.image_url}
                      alt={article.title}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                    {article.title}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-6 py-5">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold border-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>{" "}
                  Published
                </Badge>
              </TableCell>
              <TableCell className="px-6 py-5 text-sm text-slate-500 dark:text-slate-400">
                {new Date(article.created_at).toLocaleDateString("id-ID")}
              </TableCell>
              <TableCell className="px-6 py-5 text-right">
                <div className="flex justify-end gap-2">
                  <EditArticleModal article={article} />
                  <DeleteArticleAlert articleId={article.id} />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
