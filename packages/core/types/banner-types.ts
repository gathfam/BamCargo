import type { PaginatedResponse, PaginationParams } from "./api";

// ============ DB Entity (snake_case, DB-first) ============

export interface Banner {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  alt: string;
  width: number;
  height: number;
  is_portrait: boolean;
  link: string | null;
  sort_order: number;
  is_active: boolean;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export type BannerListItem = Banner;

// ============ DTOs ============

export interface CreateBannerDto {
  title: string;
  description?: string | null;
  alt: string;
  link?: string | null;
  sort_order?: number;
  is_active?: boolean;
  start_date?: string | null;
  end_date?: string | null;
}

export type UpdateBannerDto = Partial<CreateBannerDto>;

export interface BannerFilters extends PaginationParams {
  is_active?: boolean;
}

// ============ Response shapes ============

export type BannerListResponse = PaginatedResponse<BannerListItem>;

// Public carousel shape (backward-compat dengan Phase A + extend)
export interface PublicBanner {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPortrait: boolean;
  title?: string;
  link?: string;
}

export interface PublicBannersResponse {
  data: PublicBanner[];
}