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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2, AlertTriangle } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function DeleteArticleAlert({ articleId }: { articleId: number }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      fetch(`/api/article/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      toast.success("Artikel dihapus");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: () => toast.error("Gagal menghapus artikel"),
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md rounded-2xl" size="sm">
        <AlertDialogHeader>
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <AlertDialogTitle className="text-center text-xl font-black">
            Hapus Artikel?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Yakin ingin menghapus artikel ini? Tindakan ini tidak dapat
            dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center gap-2 mt-4">
          <AlertDialogCancel className="flex-1 rounded-xl">
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteMutation.mutate(articleId)}
            className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white"
          >
            {deleteMutation.isPending ? "Menghapus..." : "Ya, Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
