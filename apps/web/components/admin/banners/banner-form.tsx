"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { BannerService } from "@bamcargo/core";
import { ApiError } from "@bamcargo/core/lib/api-error";
import type { Banner } from "@bamcargo/core/types/banner-types";
import { Button } from "@bamcargo/ui/button";
import { Input } from "@bamcargo/ui/input";
import { Label } from "@bamcargo/ui/label";
import { Textarea } from "@bamcargo/ui/textarea";
import { Switch } from "@bamcargo/ui/switch";
import { Card, CardContent } from "@bamcargo/ui/card";
import { useBeforeUnload } from "@/hooks/use-before-unload";

interface BannerFormProps {
  mode: "create" | "edit";
  initialData?: Banner;
}

function toDatetimeLocal(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function BannerForm({ mode, initialData }: BannerFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [alt, setAlt] = useState(initialData?.alt ?? "");
  const [link, setLink] = useState(initialData?.link ?? "");
  const [sortOrder, setSortOrder] = useState<string>(
    initialData?.sort_order !== undefined
      ? String(initialData.sort_order)
      : "0",
  );
  const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
  const [startDate, setStartDate] = useState(
    toDatetimeLocal(initialData?.start_date ?? null),
  );
  const [endDate, setEndDate] = useState(
    toDatetimeLocal(initialData?.end_date ?? null),
  );
  const [imageFile, setImageFile] = useState<File | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      if (mode === "create") return BannerService.create(formData);
      return BannerService.update(initialData!.id, formData);
    },
    onSuccess: () => {
      toast.success(
        mode === "create"
          ? "Banner berhasil dibuat"
          : "Banner berhasil diupdate",
      );
      router.push("/admin/banner");
      router.refresh();
    },
    onError: (error: Error) => {
      const message =
        error instanceof ApiError ? error.message : "Terjadi kesalahan";
      console.log(error.message);
      toast.error(message);
    },
  });
  useBeforeUnload(isPending);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Judul wajib diisi");
      return;
    }
    if (!alt.trim()) {
      toast.error("Alt text wajib diisi");
      return;
    }
    if (mode === "create" && !imageFile) {
      toast.error("Gambar wajib diupload");
      return;
    }
    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      toast.error("Tanggal selesai harus setelah tanggal mulai");
      return;
    }

    const formData = new FormData();
    if (imageFile) formData.append("image", imageFile);
    formData.append("title", title.trim());
    formData.append("description", description.trim());
    formData.append("alt", alt.trim());
    formData.append("link", link.trim());
    formData.append("sort_order", sortOrder || "0");
    formData.append("is_active", String(isActive));
    formData.append("start_date", startDate || "");
    formData.append("end_date", endDate || "");

    mutate(formData);
  };
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://bamcargo.co.id";
  const imageUrl = initialData?.image_url
    ? initialData.image_url.startsWith("http")
      ? initialData.image_url
      : `${baseUrl}${initialData.image_url}`
    : "";

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-bold">
              Judul <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              placeholder="Promo Lebaran 2026"
              disabled={isPending}
              required
            />
          </div>

          {/* Image upload — Article style */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">
              Gambar Banner{" "}
              {mode === "create" && <span className="text-destructive">*</span>}
            </Label>
            {imageUrl && !imageFile && (
              <div className="relative w-full max-w-md aspect-[16/9] rounded-lg overflow-hidden border bg-slate-100 dark:bg-slate-800">
                <Image
                  src={imageUrl} // <--- SEBELUMNYA initialData.image_url
                  alt={initialData?.alt || "Preview Banner"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            )}
            <Input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImageFile(e.target.files?.[0] ?? null)
              }
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">
              JPG, PNG, atau WebP (max 5MB).{" "}
              {mode === "edit" && "Kosongkan jika tidak ingin mengubah gambar."}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-bold">
              Deskripsi{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (catatan internal admin)
              </span>
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              placeholder="Keterangan tambahan untuk identifikasi banner..."
              rows={3}
              disabled={isPending}
            />
          </div>

          {/* Alt text */}
          <div className="space-y-2">
            <Label htmlFor="alt" className="text-sm font-bold">
              Alt Text <span className="text-destructive">*</span>
            </Label>
            <Input
              id="alt"
              value={alt}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAlt(e.target.value)
              }
              placeholder="Deskripsi gambar untuk accessibility & SEO"
              disabled={isPending}
              required
            />
            <p className="text-xs text-muted-foreground">
              Teks alternatif yang muncul kalau gambar gagal load.
            </p>
          </div>

          {/* Link */}
          <div className="space-y-2">
            <Label htmlFor="link" className="text-sm font-bold">
              URL Tujuan{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (opsional)
              </span>
            </Label>
            <Input
              id="link"
              type="url"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLink(e.target.value)
              }
              placeholder="https://example.com/promo atau /artikel/promo-lebaran"
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">
              Kalau diisi, banner akan jadi clickable dan mengarah ke URL ini.
            </p>
          </div>

          {/* Sort order */}
          <div className="space-y-2">
            <Label htmlFor="sort_order" className="text-sm font-bold">
              Urutan Tampil
            </Label>
            <Input
              id="sort_order"
              type="number"
              value={sortOrder}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSortOrder(e.target.value)
              }
              placeholder="0"
              className="max-w-[120px]"
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">
              Banner dengan urutan lebih kecil tampil duluan. Kalau sama, banner
              terbaru tampil duluan.
            </p>
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <Label className="text-sm font-bold">
              Jadwal Tampil{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (opsional)
              </span>
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="start_date"
                  className="text-xs text-muted-foreground"
                >
                  Tanggal Mulai
                </Label>
                <Input
                  id="start_date"
                  type="datetime-local"
                  value={startDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStartDate(e.target.value)
                  }
                  disabled={isPending}
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="end_date"
                  className="text-xs text-muted-foreground"
                >
                  Tanggal Selesai
                </Label>
                <Input
                  id="end_date"
                  type="datetime-local"
                  value={endDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEndDate(e.target.value)
                  }
                  disabled={isPending}
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Kosongkan kalau banner mau tampil terus selama statusnya aktif.
            </p>
          </div>

          {/* Active toggle */}
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="is_active" className="text-sm font-bold">
                Status Aktif
              </Label>
              <p className="text-sm text-muted-foreground">
                Hanya banner aktif yang tampil di carousel homepage.
              </p>
            </div>
            <Switch
              id="is_active"
              checked={isActive}
              onCheckedChange={setIsActive}
              disabled={isPending}
            />
          </div>

          {/* Submit buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/banner")}
              disabled={isPending}
            >
              Batal
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending
                ? "Menyimpan..."
                : mode === "create"
                  ? "Simpan Banner"
                  : "Update Banner"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
