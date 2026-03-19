"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReceiptService } from "@/services/receiptService";
import { Loader2, Search, Van } from "lucide-react";
import { ReceiptDetailCard } from "./receipt-detail-card";
import { ButtonGroup } from "@/components/ui/button-group";
import { autoScrollOnFocus } from "@/lib/utils";
import { ReceiptSkeletonCard } from "./skeleton-card";

export function ReceiptCard() {
  const [receiptNumber, setReceiptNumber] = useState("");

  const { data, isLoading, error, refetch, isFetched } = useQuery({
    queryKey: ["receipt", receiptNumber],
    queryFn: () => ReceiptService.getByNumber(receiptNumber),
    enabled: false,
    retry: false,
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resiValue = formData.get("resi") as string;

    if (resiValue) {
      setReceiptNumber(resiValue);

      if (resiValue === receiptNumber) {
        refetch();
      }
    }
  };

  return (
    <div
      className="flex flex-col space-y-6 items-center justify-center w-full mx-auto"
      onFocus={autoScrollOnFocus}
    >
      <Card className="w-full shadow-md">
        <CardContent>
          <div className="text-sm flex-row flex space-x-2 my-4.5 uppercase font-bold">
            <Van size={13} />
            <p>Lacak Pengiriman</p>
          </div>
          <form
            onSubmit={handleSearch}
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
                  placeholder="Cek Resi (Contoh: IMA DO-0867)"
                  required
                  className="h-12 text-lg"
                />
                <Button
                  variant={"default"}
                  type="submit"
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
      {error && (
        <p className="text-red-500 bg-red-50 p-4 rounded-lg w-full text-center border border-red-200">
          Detail resi tidak ditemukan.
        </p>
      )}
      {isLoading && <ReceiptSkeletonCard />}
      {isFetched && data && <ReceiptDetailCard data={data.data} />}
    </div>
  );
}
