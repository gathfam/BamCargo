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
import { BannerService } from "@bamcargo/core";
import { ApiError } from "@bamcargo/core/lib/api-error";
import type { BannerListItem } from "@bamcargo/core/types/banner-types";

interface DeleteBannerAlertProps {
  banner: BannerListItem | null;
  open: boolean;
  onClose: () => void;
}

export function DeleteBannerAlert({
  banner,
  open,
  onClose,
}: DeleteBannerAlertProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => BannerService.delete(id),
    onSuccess: () => {
      toast.success("Banner berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      onClose();
      router.refresh();
    },
    onError: (error: Error) => {
      const message =
        error instanceof ApiError ? error.message : "Gagal menghapus banner";
      toast.error(message);
    },
  });

  const handleConfirm = () => {
    if (!banner) return;
    mutate(banner.id);
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(isOpen: boolean) => !isOpen && onClose()}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus Banner?</AlertDialogTitle>
          <AlertDialogDescription>
            Banner <span className="font-semibold">{banner?.title}</span> akan
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
