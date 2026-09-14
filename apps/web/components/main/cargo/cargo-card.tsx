"use client";

import { memo } from "react";
import { Card, CardContent } from "@bamcargo/ui/card";
import { Button } from "@bamcargo/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@bamcargo/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bamcargo/ui/tabs";
import { Bike, Loader2, Search, Truck } from "lucide-react";

import { RegionSearch } from "../city-search";
import type {
  FormFieldsProps,
  ShippingResultsProps,
} from "@/types/shipping-form-types";
import { autoScrollOnFocus } from "@bamcargo/core/lib/utils";
import { useShippingCalculator } from "@/hooks/use-shipping-calculator";
import { CargoSkeletonCard } from "./skeleton-card";
import RouteHeader from "./cargo-route-header";
import CostTable from "./cargo-cost-table";

// ─── Results Component ───────────────────────────────────────

const ShippingResults = memo(function ShippingResults({
  data,
  isFetched,
  error,
}: ShippingResultsProps) {
  
  if (error) {
    return (
      <div
        className="w-full p-4 text-red-500 bg-red-50
                   border border-red-200 rounded-md text-center"
      >
        Terjadi kesalahan saat mengambil data. Silakan coba lagi.
      </div>
    );
  }

  if (!isFetched || !data) return null;

  return (
    <div
      className="w-full space-y-4
                 animate-in fade-in slide-in-from-bottom-4
                 duration-500"
    >
      <RouteHeader
        origin={data.origin_details.name}
        destination={data.destination_details.name}
      />
      <CostTable costs={data.costs} />
    </div>
  );
});

// ─── Form Fields ─────────────────────────────────────────────

function FormFields({
  params,
  onChange,
  onRegionChange,
  isLoading,
}: FormFieldsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end w-full mt-2">
      {/* Kota Asal */}
      <div className="grid gap-2 flex-1" onFocus={autoScrollOnFocus}>
        <RegionSearch
          value={params.orig_id ?? undefined}
          onChange={(region) => onRegionChange("orig_id", region)}
          placeholder="Pilih Kota Asal"
        />
      </div>

      {/* Kota Tujuan */}
      <div className="grid gap-2 flex-1" onFocus={autoScrollOnFocus}>
        <RegionSearch
          value={params.dest_id ?? undefined}
          onChange={(region) => onRegionChange("dest_id", region)}
          placeholder="Pilih Kota Tujuan"
        />
      </div>

      {/* Weight / CC — conditional per mode */}
      <div className="grid gap-2 flex-1" onFocus={autoScrollOnFocus}>
        <TabsContent value="cargo" className="mt-0">
          <InputGroup className="text-lg h-12! min-w-full">
            <InputGroupInput
              name="weight"
              placeholder="Berat"
              type="number"
              value={params.weight}
              onChange={onChange}
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
              onChange={onChange}
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
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────

export function ShippingCalculator() {
  const {
    mode,
    params,
    data,
    error,
    isLoading,
    isFetched,
    handleModeChange,
    handleInputChange,
    handleRegionChange,
    handleSubmit,
  } = useShippingCalculator();

  return (
    <div className="flex flex-col space-y-6 items-center justify-center w-full mx-auto">
      <Card className="w-full shadow-md col-span-3" id="cargo">
        <CardContent>
          <Tabs value={mode} onValueChange={handleModeChange}>
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
                <Bike className="mr-2 h-4 w-4" />
                Motor
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <FormFields
                mode={mode}
                params={params}
                onChange={handleInputChange}
                onRegionChange={handleRegionChange}
                isLoading={isLoading}
              />
            </form>
          </Tabs>
        </CardContent>
      </Card>

      {isLoading ? (
        <CargoSkeletonCard />
      ) : (
        <ShippingResults data={data} isFetched={isFetched} error={error} />
      )}
    </div>
  );
}