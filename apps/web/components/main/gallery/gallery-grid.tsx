"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import type { Gallery } from "@bamcargo/core/types/gallery-types"
import { getImageUrl } from "@bamcargo/core/lib/utils"
import { Badge } from "@bamcargo/ui/badge"

interface GalleryGridProps {
  items: Gallery[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<Gallery | null>(null)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-slate-400 dark:text-slate-600">
        <p className="text-lg font-medium">Belum ada foto di galeri.</p>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {items.map((item) => {
          const imageUrl = getImageUrl(item.image_url)
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              className="group relative block w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label={`Lihat foto: ${item.title}`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-left">
                    <p className="text-sm font-bold line-clamp-1">{item.title}</p>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-[10px] bg-white/20 text-white border-none backdrop-blur-sm"
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors z-10"
              aria-label="Tutup"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="relative w-full max-h-[75vh] rounded-xl overflow-hidden bg-slate-900">
              <Image
                src={getImageUrl(lightbox.image_url)}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="object-contain w-full max-h-[75vh]"
                priority
              />
            </div>

            <div className="mt-3 text-white">
              <p className="font-bold text-base">{lightbox.title}</p>
              {lightbox.description && (
                <p className="text-sm text-slate-300 mt-1">{lightbox.description}</p>
              )}
              <Badge
                variant="secondary"
                className="mt-2 text-[11px] bg-white/10 text-white border-white/20"
              >
                {lightbox.category}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
