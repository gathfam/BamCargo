"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArticleService } from "@bamcargo/core";
import type { Article, ArticleStatus } from "@bamcargo/core";
import { Button } from "@bamcargo/ui/button";
import { Input } from "@bamcargo/ui/input";
import { Card, CardContent } from "@bamcargo/ui/card";
import { Badge } from "@bamcargo/ui/badge";
import { X } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor";
import { useBeforeUnload } from "@/hooks/use-before-unload";

const MAX_TAGS = 10;
const MAX_TAG_LENGTH = 30;

type ArticleFormProps =
  | { mode: "create"; article?: undefined }
  | { mode: "edit"; article: Article };

export function ArticleForm(props: ArticleFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const isEdit = props.mode === "edit";

  const [title, setTitle] = useState(isEdit ? props.article.title : "");
  const [content, setContent] = useState(isEdit ? props.article.content : "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>(
    isEdit ? (props.article.tags ?? []) : [],
  );
  const [tagInput, setTagInput] = useState("");

  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      isEdit
        ? ArticleService.update(props.article.id, formData)
        : ArticleService.create(formData),
    onSuccess: (_, variables) => {
      const status = variables.get("status");
      toast.success(
        status === "draft"
          ? isEdit
            ? "Draft berhasil diperbarui."
            : "Draft berhasil disimpan."
          : "Artikel berhasil dipublish.",
      );
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      if (isEdit) {
        queryClient.invalidateQueries({
          queryKey: ["article", props.article.id],
        });
      }
      router.push("/admin/artikel");
      router.refresh();
    },
    onError: (err: Error) => {
      toast.error(err.message || "Gagal menyimpan artikel");
    },
  });

  const isPending = mutation.isPending;
  useBeforeUnload(isPending);

  const addTag = (raw: string) => {
    const tag = raw.trim().toLowerCase();
    if (!tag) return;
    if (tag.length > MAX_TAG_LENGTH) {
      toast.error(`Tag maksimal ${MAX_TAG_LENGTH} karakter`);
      return;
    }
    if (tags.includes(tag)) {
      setTagInput("");
      return;
    }
    if (tags.length >= MAX_TAGS) {
      toast.error(`Maksimal ${MAX_TAGS} tag`);
      return;
    }
    setTags([...tags, tag]);
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    } else if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const buildFormData = (status: ArticleStatus): FormData | null => {
    if (!title.trim()) {
      toast.error("Judul wajib diisi");
      return null;
    }
    if (!content.trim() || content === "<p></p>") {
      toast.error("Konten wajib diisi");
      return null;
    }
    if (!isEdit && !imageFile) {
      toast.error("Gambar cover wajib diisi");
      return null;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("status", status);
    formData.append("tags", tags.join(","));
    if (imageFile) formData.append("image", imageFile);
    return formData;
  };

  const handleSave = (status: ArticleStatus) => {
    const formData = buildFormData(status);
    if (formData) mutation.mutate(formData);
  };

  const publishLabel = isEdit
    ? props.article.isPublished
      ? "Update"
      : "Publish"
    : "Publish";

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold">Judul Artikel</label>
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="Masukkan judul artikel..."
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold">
            Gambar Cover (Max 2MB)
            {isEdit && (
              <span className="text-xs font-normal text-muted-foreground ml-2">
                — kosongkan jika tidak ingin mengubah
              </span>
            )}
          </label>
          {isEdit && props.article.image_url && !imageFile && (
            <div className="relative w-full max-w-sm aspect-video rounded-lg overflow-hidden border bg-slate-100 dark:bg-slate-800">
              <Image
                src={props.article.image_url}
                alt={props.article.title}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageFile(e.target.files?.[0] ?? null)}
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold">
            Tag{" "}
            <span className="text-xs font-normal text-muted-foreground">
              (opsional, maksimal {MAX_TAGS} tag)
            </span>
          </label>
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-md border border-input bg-transparent dark:bg-input/30 min-h-10">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="gap-1 pl-2 pr-1 py-1 text-xs font-medium"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  disabled={isPending}
                  className="rounded-full hover:bg-background/50 p-0.5"
                  aria-label={`Hapus tag ${tag}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              onBlur={() => addTag(tagInput)}
              placeholder={
                tags.length === 0 ? "Ketik tag, tekan Enter..." : ""
              }
              disabled={isPending || tags.length >= MAX_TAGS}
              className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Tekan Enter atau koma untuk menambah tag. Backspace untuk hapus tag
            terakhir.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold">Konten Artikel</label>
          <RichTextEditor value={content} onChange={setContent} />
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/artikel")}
            disabled={isPending}
          >
            Batal
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => handleSave("draft")}
            disabled={isPending}
          >
            {isPending ? "Menyimpan..." : "Simpan Draft"}
          </Button>
          <Button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isPending}
          >
            {isPending ? "Menyimpan..." : publishLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}