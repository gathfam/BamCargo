import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type {
  ShippingResult,
  CalculateCargoCostDto,
  CalculateMotorCostDto,
} from "../types/shipping-types";

export const ShippingService = {
  /**
   * Calculate shipping cost for cargo
   */
  calculateCargo(payload: CalculateCargoCostDto): Promise<ShippingResult> {
    return apiClient.post<ShippingResult>(API_ENDPOINTS.shipping.cargo, payload);
  },

  /**
   * Calculate shipping cost for motorcycle
   */
  calculateMotor(payload: CalculateMotorCostDto): Promise<ShippingResult> {
    return apiClient.post<ShippingResult>(API_ENDPOINTS.shipping.motor, payload);
  },
};