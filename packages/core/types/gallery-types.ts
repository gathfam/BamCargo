import type { PaginatedResponse, PaginationParams } from "./api";

// ============ DB Entity (snake_case, DB-first) ============

export interface Gallery {
  id: number;
  title: string;
  description: string | null;
  alt: string;
  image_url: string;
  category: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  // === Derived ===
  isActive: boolean;
}

export type GalleryListItem = Gallery;

// ============ DTOs ============

export interface CreateGalleryDto {
  title: string;
  description?: string | null;
  alt: string;
  category: string;
  sort_order?: number;
  is_active?: boolean;
}

export type UpdateGalleryDto = Partial<CreateGalleryDto>;

export interface GalleryFilters extends PaginationParams {
  is_active?: boolean;
  category?: string;
}

// ============ Response shapes ============

export type GalleryListResponse = PaginatedResponse<GalleryListItem>;

// ============ Public shape ============
// Sesuai instruksi, tidak ada field yang dihilangkan
export type PublicGalleryListItem = GalleryListItem;
export type PublicGalleryListResponse = PaginatedResponse<PublicGalleryListItem>;