import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type {
  Gallery,
  GalleryFilters,
  GalleryListResponse,
  PublicGalleryListResponse,
} from "../types/gallery-types";

export const GalleryService = {
  listPublic(filters: GalleryFilters = {}): Promise<PublicGalleryListResponse> {
    const params = new URLSearchParams();
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));
    if (filters.category) params.set("category", filters.category);
    const qs = params.toString();
    return apiClient.get<PublicGalleryListResponse>(
      qs ? `${API_ENDPOINTS.gallery.list}?${qs}` : API_ENDPOINTS.gallery.list,
    );
  },
  list(filters: GalleryFilters = {}): Promise<GalleryListResponse> {
    const params = new URLSearchParams();
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));
    if (typeof filters.is_active === "boolean")
      params.set("is_active", String(filters.is_active));
    if (filters.category) params.set("category", filters.category);
    const qs = params.toString();
    return apiClient.get<GalleryListResponse>(
      qs
        ? `${API_ENDPOINTS.gallery.admin.list}?${qs}`
        : API_ENDPOINTS.gallery.admin.list,
    );
  },
  getById(id: number): Promise<Gallery> {
    return apiClient.get<Gallery>(API_ENDPOINTS.gallery.admin.detail(id));
  },
  create(data: FormData): Promise<Gallery> {
    return apiClient.post<Gallery>(API_ENDPOINTS.gallery.admin.create, data);
  },
  update(id: number, data: FormData): Promise<Gallery> {
    return apiClient.put<Gallery>(API_ENDPOINTS.gallery.admin.update(id), data);
  },
  delete(id: number): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.gallery.admin.delete(id));
  },
};
