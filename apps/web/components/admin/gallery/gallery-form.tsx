// components/admin/gallery/gallery-form.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { GalleryService } from "@bamcargo/core/services/gallery-service"
import { ApiError } from "@bamcargo/core/lib/api-error"
import type { Gallery } from "@bamcargo/core/types/gallery-types"
import { Button } from "@bamcargo/ui/button"
import { Input } from "@bamcargo/ui/input"
import { Label } from "@bamcargo/ui/label"
import { Textarea } from "@bamcargo/ui/textarea"
import { Switch } from "@bamcargo/ui/switch"
import { Card, CardContent } from "@bamcargo/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bamcargo/ui/select"
import { useBeforeUnload } from "@/hooks/use-before-unload"
import { getImageUrl } from "@bamcargo/core/lib/utils"

const GALLERY_CATEGORIES = [
  "Operasional",
  "Armada",
  "Kegiatan",
  "Fasilitas",
  "Tim",
]

interface GalleryFormProps {
  mode: "create" | "edit"
  initialData?: Gallery
}

export function GalleryForm({ mode, initialData }: GalleryFormProps) {
  const router = useRouter()

  const [title, setTitle] = useState(initialData?.title ?? "")
  const [description, setDescription] = useState(initialData?.description ?? "")
  const [alt, setAlt] = useState(initialData?.alt ?? "")
  const [category, setCategory] = useState(initialData?.category ?? "")
  const [sortOrder, setSortOrder] = useState<string>(
    initialData?.sort_order !== undefined
      ? String(initialData.sort_order)
      : "0"
  )
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      if (mode === "create") return GalleryService.create(formData)
      return GalleryService.update(initialData!.id, formData)
    },
    onSuccess: () => {
      toast.success(
        mode === "create"
          ? "Foto galeri berhasil ditambahkan"
          : "Foto galeri berhasil diupdate"
      )
      router.push("/admin/gallery")
      router.refresh()
    },
    onError: (error: Error) => {
      const message =
        error instanceof ApiError ? error.message : "Terjadi kesalahan"
      toast.error(message)
    },
  })
  
  useBeforeUnload(isPending)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !alt.trim() || !category.trim()) {
      toast.error("Judul, alt text, dan kategori wajib diisi")
      return
    }
    if (mode === "create" && !imageFile) {
      toast.error("Gambar wajib diupload")
      return
    }

    const formData = new FormData()
    if (imageFile) formData.append("image", imageFile)
    formData.append("title", title.trim())
    formData.append("description", description.trim())
    formData.append("alt", alt.trim())
    formData.append("category", category.trim())
    formData.append("sort_order", sortOrder || "0")
    formData.append("is_active", String(isActive))

    mutate(formData)
  }

  const imageUrl = getImageUrl(initialData?.image_url)

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-bold">
                Judul <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Bongkar muat armada cabang Surabaya"
                disabled={isPending}
                required
              />
              <p className="text-xs text-muted-foreground">
                Judul atau nama foto kegiatan yang akan ditampilkan pada daftar galeri.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-bold">
                Kategori <span className="text-destructive">*</span>
              </Label>
              <Select
                value={category}
                onValueChange={setCategory}
                disabled={isPending}
                required
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Pilih kategori..." />
                </SelectTrigger>
                <SelectContent>
                  {GALLERY_CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Kategori foto untuk pengelompokan di halaman galeri publik.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-bold">
              Foto Galeri{" "}
              {mode === "create" && <span className="text-destructive">*</span>}
            </Label>
            {imageUrl && !imageFile && (
              <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden border bg-slate-100 dark:bg-slate-800">
                <Image
                  src={imageUrl}
                  alt={initialData?.alt || "Preview Galeri"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            )}
            <Input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">
              JPG, PNG, atau WebP (max 5MB).{" "}
              {mode === "edit" && "Kosongkan jika tidak ingin mengubah foto."}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-bold">
              Deskripsi{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (opsional)
              </span>
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat mengenai foto kegiatan ini..."
              rows={3}
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">
              Keterangan tambahan atau cerita latar belakang dari foto ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="alt" className="text-sm font-bold">
                Alt Text <span className="text-destructive">*</span>
              </Label>
              <Input
                id="alt"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                placeholder="Truk fuso BAM Cargo parkir di gudang"
                disabled={isPending}
                required
              />
              <p className="text-xs text-muted-foreground">
                Deskripsi gambar untuk accessibility & SEO.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sort_order" className="text-sm font-bold">
                Urutan Tampil
              </Label>
              <Input
                id="sort_order"
                type="number"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                placeholder="0"
                className="max-w-[120px]"
                disabled={isPending}
              />
              <p className="text-xs text-muted-foreground">
                Urutan lebih kecil tampil duluan.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="is_active" className="text-sm font-bold">
                Status Aktif
              </Label>
              <p className="text-sm text-muted-foreground">
                Foto yang aktif akan ditampilkan di halaman publik Galeri.
              </p>
            </div>
            <Switch
              id="is_active"
              checked={isActive}
              onCheckedChange={setIsActive}
              disabled={isPending}
            />
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/gallery")}
              disabled={isPending}
            >
              Batal
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending
                ? "Menyimpan..."
                : mode === "create"
                  ? "Simpan Foto"
                  : "Update Foto"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}