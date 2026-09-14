"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@bamcargo/ui/alert-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GalleryService } from "@bamcargo/core/services/gallery-service";
import { ApiError } from "@bamcargo/core/lib/api-error";
import type { GalleryListItem } from "@bamcargo/core/types/gallery-types";

interface DeleteGalleryAlertProps {
  item: GalleryListItem | null;
  open: boolean;
  onClose: () => void;
}

export function DeleteGalleryAlert({
  item,
  open,
  onClose,
}: DeleteGalleryAlertProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => GalleryService.delete(id),
    onSuccess: () => {
      toast.success("Foto galeri berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      onClose();
      router.refresh();
    },
    onError: (error: Error) => {
      const message =
        error instanceof ApiError
          ? error.message
          : "Gagal menghapus foto galeri";
      toast.error(message);
    },
  });

  const handleConfirm = () => {
    if (!item) return;
    mutate(item.id);
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(isOpen: boolean) => !isOpen && onClose()}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus Foto Galeri?</AlertDialogTitle>
          <AlertDialogDescription>
            Foto <span className="font-semibold">{item?.title}</span> akan
            dihapus permanen beserta file gambarnya. Tindakan ini tidak bisa
            dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isPending}
            className="bg-destructive text-white hover:bg-destructive/90"
          >
            {isPending ? "Menghapus..." : "Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
