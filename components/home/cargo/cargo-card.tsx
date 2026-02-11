"use client";

import { useState, memo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Clock,
  Loader2,
  Motorbike,
  Package,
  Search,
  Truck,
} from "lucide-react";
import { toast } from "sonner";

import { RegionSearch } from "../city-search";
import { OngkirService } from "@/services/ongkirService";
import { RegionData } from "@/types/api";

type ShippingMode = "cargo" | "motor";

export function ShippingCalculator() {
  const [mode, setMode] = useState<ShippingMode>("cargo");
  const [params, setParams] = useState({
    weight: "",
    mtr_cc: "",
    orig_id: null as RegionData | null,
    dest_id: null as RegionData | null,
  });

  const { data, isLoading, error, refetch, isFetched } = useQuery({
    queryKey: ["shipping", mode, params],
    queryFn: async () => {
      const commonPayload = {
        orig_id: params.orig_id?.code ?? "",
        dest_id: params.dest_id?.code ?? "",
      };

      if (mode === "cargo") {
        return OngkirService.getCostsByVolume({
          ...commonPayload,
          weight: params.weight,
          height: "0", width: "0", length: "0", 
        });
      }
      return OngkirService.getCostsMotor({
        ...commonPayload,
        mtr_cc: params.mtr_cc,
      });
    },
    enabled: false,
    retry: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!params.orig_id || !params.dest_id) {
      toast.error("Mohon pilih kota asal dan tujuan");
      return;
    }
    
    // Validation per mode
    if (mode === "cargo" && !params.weight) {
        toast.error("Berat barang wajib diisi");
        return;
    }
    if (mode === "motor" && !params.mtr_cc) {
        toast.error("CC motor wajib diisi");
        return;
    }

    refetch();
  };

  return (
    <div className="flex flex-col space-y-6 items-center justify-center w-full mx-auto">
      <Card className="w-full shadow-md col-span-3">
        <CardContent>
          <Tabs
            defaultValue="cargo"
            value={mode}
            onValueChange={(v) => setMode(v as ShippingMode)}
          >
            <TabsList className="h-10! p-0 w-full md:w-fit" variant="line">
              <TabsTrigger
                value="cargo"
                className="h-8! uppercase font-bold w-full md:px-8"
              >
                <Truck className="mr-2 h-4 w-4" />
                Kargo
              </TabsTrigger>
              <TabsTrigger
                value="motor"
                className="h-8! uppercase font-bold w-full md:px-8"
              >
                <Motorbike className="mr-2 h-4 w-4" />
                Motor
              </TabsTrigger>
            </TabsList>

            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-4 md:items-end w-full mt-2"
            >
              <div className="grid gap-2 flex-1">
                <RegionSearch
                  value={params.orig_id ?? undefined}
                  onChange={(region) =>
                    setParams((p) => ({ ...p, orig_id: region }))
                  }
                  placeholder="Pilih Kota Asal"
                />
              </div>

              <div className="grid gap-2 flex-1">
                <RegionSearch
                  value={params.dest_id ?? undefined}
                  onChange={(region) =>
                    setParams((p) => ({ ...p, dest_id: region }))
                  }
                  placeholder="Pilih Kota Tujuan"
                />
              </div>

              <div className="grid gap-2 flex-1">
                <TabsContent value="cargo" className="mt-0">
                  <InputGroup className="text-lg h-12! min-w-full">
                    <InputGroupInput
                      name="weight"
                      placeholder="Berat"
                      type="number"
                      value={params.weight}
                      onChange={handleInputChange}
                    />
                    <InputGroupAddon align="inline-end">
                      <p>kg</p>
                    </InputGroupAddon>
                  </InputGroup>
                </TabsContent>

                <TabsContent value="motor" className="mt-0">
                  <InputGroup className="text-lg h-12! min-w-full">
                    <InputGroupInput
                      name="mtr_cc"
                      placeholder="Ukuran Silinder"
                      type="number"
                      value={params.mtr_cc}
                      onChange={handleInputChange}
                    />
                    <InputGroupAddon align="inline-end">
                      <p>cc</p>
                    </InputGroupAddon>
                  </InputGroup>
                </TabsContent>
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                {isLoading ? "Memuat..." : "Cek Ongkir"}
              </Button>
            </form>
          </Tabs>
        </CardContent>
      </Card>

      <ShippingResults data={data} isFetched={isFetched} error={error} />
    </div>
  );
}

const ShippingResults = memo(
  ({
    data,
    isFetched,
    error,
  }: {
    data: any;
    isFetched: boolean;
    error: any;
  }) => {
    if (error) {
      return (
        <div className="w-full p-4 text-red-500 bg-red-50 border border-red-200 rounded-md text-center">
          Terjadi kesalahan saat mengambil data. Silakan coba lagi.
        </div>
      );
    }

    if (!isFetched || !data) return null;

    return (
      <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">
              {data.origin_details.name}
            </span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-medium text-foreground">
              {data.destination_details.name}
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          {data.costs.length === 0 ? (
            <div className="text-center p-8 text-muted-foreground border rounded-lg border-dashed">
              Tidak ada layanan tersedia untuk rute ini.
            </div>
          ) : (
            data.costs.map((cost: any, idx: number) => (
              <Card
                key={`${cost.service}-${idx}`}
                className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-xl">{cost.service}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> Est. {cost.etd} Hari
                        </span>
                        <span className="flex items-center gap-1">
                          <Package className="h-3 w-3" /> Min. {cost.min_weight}{" "}
                          Kg
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 w-full md:w-auto">
                      <div className="text-2xl font-bold text-primary">
                        {cost.display_cost}
                      </div>
                      <div className="text-xs text-muted-foreground text-right">
                        Rate: {cost.display_base_rate} / kg
                        <br />
                        Charged: {cost.charged_weight} kg
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    );
  }
);
ShippingResults.displayName = "ShippingResults";