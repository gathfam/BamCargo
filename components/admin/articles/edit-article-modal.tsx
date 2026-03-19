"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { RichTextEditor } from "@/components/RichTextEditor";

export function EditArticleModal({ article }: { article: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCancelAlert, setShowCancelAlert] = useState(false);
  const queryClient = useQueryClient();

  // Inisialisasi state dengan konten yang sudah ada (mengutamakan content, fallback ke excerpt)
  const [content, setContent] = useState(
    article.content || article.excerpt || "",
  );

  const updateMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`/api/article/${article.id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal update artikel");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("Artikel berhasil diperbarui.");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: (error: any) => toast.error(error.message),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate(new FormData(e.currentTarget));
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setShowCancelAlert(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleForceClose = () => {
    setShowCancelAlert(false);
    setIsOpen(false);
    // Kembalikan ke konten semula jika dibatalkan
    setContent(article.content || article.excerpt || "");
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-2xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Edit Artikel
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-2">
              <label className="text-sm font-bold">Judul Artikel</label>
              <Input
                name="title"
                defaultValue={article.title}
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">
                Gambar Cover Baru (Opsional)
              </label>
              <Input name="image" type="file" accept="image/*" />
              <p className="text-xs text-muted-foreground">
                Kosongkan jika tidak ingin mengubah gambar.
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Konten Artikel</label>
              <input type="hidden" name="content" value={content} />
              <RichTextEditor value={content} onChange={setContent} />
            </div>
            <div className="pt-4 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowCancelAlert(true)}
              >
                Batal
              </Button>
              <Button type="submit" disabled={updateMutation.isPending}>
                {updateMutation.isPending ? "Menyimpan..." : "Update Artikel"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showCancelAlert} onOpenChange={setShowCancelAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Batalkan perubahan?</AlertDialogTitle>
            <AlertDialogDescription>
              Data edit akan dikembalikan ke kondisi awal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Lanjut Edit</AlertDialogCancel>
            <AlertDialogAction onClick={handleForceClose}>
              Ya, Batalkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
