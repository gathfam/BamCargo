import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type { RegionData } from "../types/destination-types";

export const DestinationService = {
  /**
   * Search origin/destination by query
   */
  search(query: string): Promise<RegionData> {
    return apiClient.get<RegionData>(API_ENDPOINTS.destinations.search, {
      params: { query },
    });
  },
};