"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ShippingService } from "@bamcargo/core";
import type { RegionData } from "@bamcargo/core/types/destination-types";
import type {
  ShippingMode,
  ShippingResult,
} from "@bamcargo/core/types/shipping-types";
import type { ShippingParams } from "@/types/shipping-form-types";

const INITIAL_PARAMS: ShippingParams = {
  weight: "",
  mtr_cc: "",
  orig_id: null,
  dest_id: null,
};

// ─── Helpers ─────────────────────────────────────────────────

function validateParams(
  mode: ShippingMode,
  params: ShippingParams,
): string | null {
  if (!params.orig_id || !params.dest_id) {
    return "Mohon pilih kota asal dan tujuan";
  }
  if (mode === "cargo" && !params.weight) {
    return "Berat barang wajib diisi";
  }
  if (mode === "motor" && !params.mtr_cc) {
    return "CC motor wajib diisi";
  }
  return null;
}

async function fetchShippingCost(
  mode: ShippingMode,
  params: ShippingParams,
): Promise<ShippingResult> {
  const base = {
    orig_id: params.orig_id?.code ?? "",
    dest_id: params.dest_id?.code ?? "",
  };

  if (mode === "cargo") {
    return ShippingService.calculateCargo({
      ...base,
      weight: params.weight,
      height: "0",
      width: "0",
      length: "0",
    });
  }

  return ShippingService.calculateMotor({
    ...base,
    mtr_cc: params.mtr_cc,
  });
}

// ─── Hook ────────────────────────────────────────────────────

export function useShippingCalculator() {
  const [mode, setMode] = useState<ShippingMode>("cargo");
  const [params, setParams] = useState<ShippingParams>(INITIAL_PARAMS);

  const { data, isLoading, error, refetch, isFetched } =
    useQuery<ShippingResult>({
      queryKey: ["shipping", mode, params],
      queryFn: () => fetchShippingCost(mode, params),
      enabled: false,
      retry: false,
    });

  const handleModeChange = (value: string) => {
    setMode(value as ShippingMode);
    setParams(INITIAL_PARAMS);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegionChange = (
    field: "orig_id" | "dest_id",
    value: RegionData,
  ) => {
    setParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateParams(mode, params);
    if (validationError) {
      toast.error(validationError);
      return;
    }
    refetch();
  };

  return {
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
  };
}