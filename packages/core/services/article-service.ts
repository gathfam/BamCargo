import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type {
  Article,
  ArticleFilters,
  ArticleListResponse,
  PublicArticle,
  PublicArticleListResponse,
} from "../types/article-types";

export const ArticleService = {
  // ============ Public ============
  listPublic(filters: ArticleFilters = {}): Promise<PublicArticleListResponse> {
    const params = new URLSearchParams();
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));
    if (filters.tag) params.set("tag", filters.tag);

    const qs = params.toString();
    const url = qs
      ? `${API_ENDPOINTS.articles.list}?${qs}`
      : API_ENDPOINTS.articles.list;

    return apiClient.get<PublicArticleListResponse>(url, {
      next: { tags: ["articles"] },
    });
  },

  getBySlug(slug: string): Promise<PublicArticle> {
    return apiClient.get<PublicArticle>(API_ENDPOINTS.articles.detail(slug), {
      next: { tags: ["articles"] },
    });
  },

  // ============ Admin (Client Component — via API) ============
  list(filters: ArticleFilters = {}): Promise<ArticleListResponse> {
    const params = new URLSearchParams();
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));
    if (filters.status) params.set("status", filters.status);
    if (filters.tag) params.set("tag", filters.tag);

    const qs = params.toString();
    const url = qs
      ? `${API_ENDPOINTS.articles.admin.list}?${qs}`
      : API_ENDPOINTS.articles.admin.list;

    return apiClient.get<ArticleListResponse>(url);
  },

  getById(id: number): Promise<Article> {
    return apiClient.get<Article>(API_ENDPOINTS.articles.admin.detail(id));
  },

  create(data: FormData): Promise<Article> {
    return apiClient.post<Article>(API_ENDPOINTS.articles.admin.create, data);
  },

  update(id: number, data: FormData): Promise<Article> {
    return apiClient.put<Article>(
      API_ENDPOINTS.articles.admin.update(id),
      data,
    );
  },

  delete(id: number): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.articles.admin.delete(id));
  },
};
