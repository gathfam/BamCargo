"use client";

import { Card, CardContent } from "@bamcargo/ui/card";
import { Button } from "@bamcargo/ui/button";
import { Input } from "@bamcargo/ui/input";
import { Label } from "@bamcargo/ui/label";
import { ButtonGroup } from "@bamcargo/ui/button-group";
import { Loader2, Search, Van } from "lucide-react";

import { autoScrollOnFocus } from "@bamcargo/core/lib/utils";
import { useReceipt } from "@/hooks/use-receipt";
import { ReceiptDetailCard } from "./receipt-detail-card";
import { ReceiptSkeletonCard } from "./skeleton-card";

// ─── Constants ────────────────────────────────────────────────

const RECEIPT_PLACEHOLDER = "Cek Resi (Contoh: IMA DO-0867)";

// ─── Main Component ───────────────────────────────────────────

export function ReceiptCard() {
  const {
    inputValue,
    data,
    isLoading,
    isFetched,
    showError,
    handleInputChange,
    handleSubmit,
  } = useReceipt();

  return (
    <div
      className="flex flex-col space-y-6
                 items-center justify-center
                 w-full mx-auto"
    >
      <Card className="w-full shadow-md">
        <CardContent>
          {/* Header */}
          <div
            className="flex flex-row items-center gap-2
                       my-4 uppercase text-sm font-bold"
          >
            <Van className="h-4 w-4" />
            <p>Lacak Pengiriman</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="grid gap-2 flex-1">
              <Label htmlFor="resi" className="sr-only">
                Nomor Resi
              </Label>

              <ButtonGroup className="w-full">
                <Input
                  id="resi"
                  name="resi"
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={autoScrollOnFocus}
                  placeholder={RECEIPT_PLACEHOLDER}
                  required
                  className="h-12 text-lg"
                />
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="h-12 px-8 cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin mr-2" />
                  ) : (
                    <Search className="mr-2" />
                  )}
                  Lacak
                </Button>
              </ButtonGroup>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Error — hanya tampil kalau input belum diubah */}
      {showError && (
        <p
          className="text-red-500 bg-red-50 p-4 rounded-lg
                     w-full text-center border border-red-200"
        >
          Detail resi tidak ditemukan. Periksa kembali nomor resi kamu.
        </p>
      )}

      {/* Loading skeleton */}
      {isLoading && <ReceiptSkeletonCard />}

      {/* Result */}
      {isFetched && data && <ReceiptDetailCard data={data.data} />}
    </div>
  );
}