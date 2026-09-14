export type ShippingMode = "cargo" | "motor";

/**
 * Map kode region → nama region (response dari endpoint search).
 * Untuk single region object, pakai `RegionData` dari destination-types.
 */
export interface RegionMap {
  [code: string]: string;
}

export interface RegionDetail {
  id: string;
  type: string;
  name: string;
}

export interface ShippingCost {
  city_origin: string;
  district_origin: string | null;
  city_destination: string;
  district_destination: string;
  service: string;
  service_code: string;
  cost: number;
  display_cost: string;
  base_rate: number;
  display_base_rate: string;
  weight: number;
  volumetric_weight: number;
  charged_weight: number;
  min_weight: number;
  volume: number;
  charged_volume: number;
  min_volume: number | null;
  etd: string;
  notes: string | null;
}

export interface ShippingResult {
  origin_details: RegionDetail;
  destination_details: RegionDetail;
  costs: ShippingCost[];
}

// ── DTOs untuk request ──

export interface CalculateCargoCostDto {
  weight: string;
  height: string;
  width: string;
  length: string;
  orig_id: string | null;
  dest_id: string | null;
}

export interface CalculateMotorCostDto {
  mtr_cc: string;
  orig_id: string | null;
  dest_id: string | null;
}