import type { PaginatedResponse, PaginationParams } from "./api";

export type ArticleStatus = "published" | "draft";

// ============ DB Entity (snake_case, DB-first) — admin only ============

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  author_id: number | null;
  status: ArticleStatus;
  tags: string[] | null;
  created_at: string;

  // === Derived di API route ===
  isPublished: boolean;
}

export type ArticleListItem = Omit<Article, "content">;

// ============ DTOs ============

export interface CreateArticleDto {
  title: string;
  content: string;
  status: ArticleStatus;
  tags?: string[];
}

export type UpdateArticleDto = Partial<CreateArticleDto>;

export interface ArticleFilters extends PaginationParams {
  status?: ArticleStatus;
  tag?: string;
}

// ============ Response shapes ============

export type ArticleListResponse = PaginatedResponse<ArticleListItem>;

// ============ Public shape (consumer-friendly, strip field admin) ============

export interface PublicArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  tags: string[] | null;
  created_at: string;
}

export type PublicArticleListItem = Omit<PublicArticle, "content">;
export type PublicArticleListResponse = PaginatedResponse<PublicArticleListItem>;