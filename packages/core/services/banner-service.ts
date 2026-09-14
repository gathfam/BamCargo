import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";

import type {
  Banner,
  BannerFilters,
  BannerListResponse,
  PublicBannersResponse,
} from "../types/banner-types";

export const BannerService = {
  // ============ Public ============
  listPublic(): Promise<PublicBannersResponse> {
    return apiClient.get<PublicBannersResponse>(API_ENDPOINTS.banners.list);
  },

  // ============ Admin (Client Component — via API) ============
  list(filters: BannerFilters = {}): Promise<BannerListResponse> {
    const params = new URLSearchParams();
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));
    if (typeof filters.is_active === "boolean")
      params.set("is_active", String(filters.is_active));

    const qs = params.toString();
    const url = qs
      ? `${API_ENDPOINTS.banners.admin.list}?${qs}`
      : API_ENDPOINTS.banners.admin.list;

    return apiClient.get<BannerListResponse>(url);
  },

  getById(id: number): Promise<Banner> {
    return apiClient.get<Banner>(API_ENDPOINTS.banners.admin.detail(id));
  },

  create(data: FormData): Promise<Banner> {
    return apiClient.post<Banner>(API_ENDPOINTS.banners.admin.create, data);
  },

  update(id: number, data: FormData): Promise<Banner> {
    return apiClient.put<Banner>(API_ENDPOINTS.banners.admin.update(id), data);
  },

  delete(id: number): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.banners.admin.delete(id));
  },
};
