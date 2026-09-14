import type { RegionData } from "@bamcargo/core/types/destination-types";
import type {
  ShippingMode,
  ShippingResult,
} from "@bamcargo/core/types/shipping-types";

export interface ShippingParams {
  weight: string;
  mtr_cc: string;
  orig_id: RegionData | null;
  dest_id: RegionData | null;
}

export interface FormFieldsProps {
  mode: ShippingMode;
  params: ShippingParams;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegionChange: (field: "orig_id" | "dest_id", value: RegionData) => void;
  isLoading: boolean;
}

export interface ShippingResultsProps {
  data: ShippingResult | undefined;
  isFetched: boolean;
  error: Error | null;
}