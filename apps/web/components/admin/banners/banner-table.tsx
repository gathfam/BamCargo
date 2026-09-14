"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@bamcargo/ui/table";
import { Button } from "@bamcargo/ui/button";
import { Badge } from "@bamcargo/ui/badge";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { useState } from "react";
import type { BannerListItem } from "@bamcargo/core/types/banner-types";
import { DeleteBannerAlert } from "./delete-banner-alert";
import Image from "next/image";

interface BannerTableProps {
  banners: BannerListItem[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getScheduleLabel(
  startDate: string | null,
  endDate: string | null,
): string {
  if (!startDate && !endDate) return "Selalu aktif";
  if (startDate && endDate)
    return `${formatDate(startDate)} – ${formatDate(endDate)}`;
  if (startDate) return `Mulai ${formatDate(startDate)}`;
  return `Sampai ${formatDate(endDate)}`;
}

export function BannerTable({ banners }: BannerTableProps) {
  const [deleteTarget, setDeleteTarget] = useState<BannerListItem | null>(null);

  return (
    <>
      <Table>
        <TableHeader className="bg-background">
          <TableRow className="border-b hover:bg-transparent">
            <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Banner
            </TableHead>
            <TableHead className="w-[80px] text-center px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Urutan
            </TableHead>
            <TableHead className="w-[100px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Status
            </TableHead>
            <TableHead className="w-[200px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Jadwal
            </TableHead>
            <TableHead className="w-[120px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs text-right">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y">
          {banners.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-32 text-center text-slate-500"
              >
                Belum ada banner.
              </TableCell>
            </TableRow>
          ) : (
            banners.map((banner) => {
              const baseUrl =
                process.env.NEXT_PUBLIC_WEB_URL || "https://bamcargo.co.id";
              const imageUrl = banner.image_url?.startsWith("http")
                ? banner.image_url
                : `${baseUrl}${banner.image_url}`;
              return (
                <TableRow
                  key={banner.id}
                  className="transition-colors border-none"
                >
                  <TableCell className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden border">
                        <Image
                          className="w-full h-full object-cover"
                          src={imageUrl}
                          alt={banner.alt}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                            {banner.title}
                          </span>
                          {banner.link && (
                            <ExternalLink className="h-3 w-3 text-slate-400 flex-shrink-0" />
                          )}
                        </div>
                        {banner.description && (
                          <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {banner.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center">
                    <span className="font-mono text-sm text-slate-900 dark:text-white">
                      {banner.sort_order}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    {banner.is_active ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold border-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                        Aktif
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-bold border-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                        Nonaktif
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-sm text-slate-500 dark:text-slate-400">
                    {getScheduleLabel(banner.start_date, banner.end_date)}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild title="Edit">
                        <Link href={`/admin/banner/${banner.id}/edit`}>
                          <Pencil className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeleteTarget(banner)}
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>

      <DeleteBannerAlert
        banner={deleteTarget}
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
      />
    </>
  );
}
