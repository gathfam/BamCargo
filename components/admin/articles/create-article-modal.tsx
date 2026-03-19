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
import { PlusCircle } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { RichTextEditor } from "@/components/RichTextEditor";

export function CreateArticleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const [showCancelAlert, setShowCancelAlert] = useState(false);
  const [content, setContent] = useState("");

  const createMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/article", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal upload artikel");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("Artikel berhasil ditambahkan.");
      setIsOpen(false);
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate(new FormData(e.currentTarget));
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
    setContent("");
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Tambah Artikel Baru
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-2xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Tambah Artikel Baru
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-4 flex flex-col">
              <label className="text-sm font-bold">Judul Artikel</label>
              <Input name="title" required type="text" />
            </div>
            <div className="space-y-4 flex flex-col">
              <label className="text-sm font-bold">
                Gambar Cover (Max 2MB)
              </label>
              <Input name="image" type="file" accept="image/*" required />
            </div>
            <div className="space-y-4 flex flex-col">
              <label className="text-sm font-bold">Konten Artikel</label>
              <input type="hidden" name="content" value={content} />
              <RichTextEditor value={content} onChange={setContent} />
            </div>
            <div className="pt-4 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
              >
                Batal
              </Button>
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Menyimpan..." : "Simpan Artikel"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showCancelAlert} onOpenChange={setShowCancelAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin membatalkan?</AlertDialogTitle>
            <AlertDialogDescription>
              Data artikel yang sudah kamu ketik akan hilang dan tidak bisa
              dikembalikan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Lanjut Menulis</AlertDialogCancel>
            <AlertDialogAction onClick={handleForceClose}>
              Ya, Batalkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
