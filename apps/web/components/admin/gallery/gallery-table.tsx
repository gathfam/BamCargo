// components/admin/gallery/gallery-table.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@bamcargo/ui/table"
import { Button } from "@bamcargo/ui/button"
import { Badge } from "@bamcargo/ui/badge"
import { Pencil, Trash2 } from "lucide-react"
import type { GalleryListItem } from "@bamcargo/core/types/gallery-types"
import { DeleteGalleryAlert } from "./delete-gallery-alert"
import { getImageUrl } from "@bamcargo/core/lib/utils"

interface GalleryTableProps {
  items: GalleryListItem[]
}

export function GalleryTable({ items }: GalleryTableProps) {
  const [deleteTarget, setDeleteTarget] = useState<GalleryListItem | null>(null)

  return (
    <>
      <Table>
        <TableHeader className="bg-background">
          <TableRow className="border-b hover:bg-transparent">
            <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Galeri
            </TableHead>
            <TableHead className="w-[150px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Kategori
            </TableHead>
            <TableHead className="w-[80px] text-center px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Urutan
            </TableHead>
            <TableHead className="w-[100px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
              Status
            </TableHead>
            <TableHead className="w-[120px] px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs text-right">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y">
          {items.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-32 text-center text-slate-500"
              >
                Belum ada foto galeri.
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => {
              const imageUrl = getImageUrl(item.image_url)
                
              return (
                <TableRow
                  key={item.id}
                  className="transition-colors border-none"
                >
                  <TableCell className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-14 rounded-lg flex-shrink-0 overflow-hidden border bg-slate-100 dark:bg-slate-800 relative">
                        <Image
                          className="object-cover"
                          src={imageUrl}
                          alt={item.alt}
                          fill
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {item.category}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center">
                    <span className="font-mono text-sm text-slate-900 dark:text-white">
                      {item.sort_order}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    {item.is_active ? (
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
                  <TableCell className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild title="Edit">
                        <Link href={`/admin/gallery/${item.id}/edit`}>
                          <Pencil className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeleteTarget(item)}
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>

      <DeleteGalleryAlert
        item={deleteTarget}
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
      />
    </>
  )
}