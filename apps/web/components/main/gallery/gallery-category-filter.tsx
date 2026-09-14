"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Badge } from "@bamcargo/ui/badge"
import { X } from "lucide-react"

const CATEGORIES = [
  "Operasional",
  "Armada",
  "Kegiatan",
  "Fasilitas",
  "Tim",
]

interface GalleryCategoryFilterProps {
  currentCategory?: string
}

export function GalleryCategoryFilter({ currentCategory }: GalleryCategoryFilterProps) {
  const router = useRouter()

  const setCategory = (cat: string | undefined) => {
    if (!cat) {
      router.push("/galeri")
    } else {
      router.push(`/galeri?category=${encodeURIComponent(cat)}`)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <span className="text-sm text-slate-500 dark:text-slate-400 mr-1">Filter:</span>
      <button
        type="button"
        onClick={() => setCategory(undefined)}
        className={`text-sm px-3 py-1 rounded-full border transition-colors font-medium ${
          !currentCategory
            ? "bg-orange-600 border-orange-600 text-white"
            : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        Semua
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setCategory(currentCategory === cat ? undefined : cat)}
          className={`text-sm px-3 py-1 rounded-full border transition-colors font-medium ${
            currentCategory === cat
              ? "bg-orange-600 border-orange-600 text-white"
              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-500 hover:text-orange-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
