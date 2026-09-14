import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type {
  JobPosting,
  JobListResponse,
  JobFilters,
  CreateJobDto,
  UpdateJobDto,
  Application,
  ApplyJobDto,
}from "../types/career-types";

export const CareerService = {
  list(filters: JobFilters = {}): Promise<JobListResponse> {
    const { page = 1, limit = 10, ...rest } = filters;
    return apiClient.get<JobListResponse>(API_ENDPOINTS.careers.list, {
      params: { page, limit, ...rest },
      next: { revalidate: 600, tags: ["careers"] },
    });
  },

  getBySlug(slug: string): Promise<JobPosting> {
    return apiClient.get<JobPosting>(API_ENDPOINTS.careers.detail(slug));
  },

  create(data: CreateJobDto): Promise<JobPosting> {
    return apiClient.post<JobPosting>(API_ENDPOINTS.careers.create, data);
  },

  update(id: string, data: UpdateJobDto): Promise<JobPosting> {
    return apiClient.put<JobPosting>(API_ENDPOINTS.careers.update(id), data);
  },

  delete(id: string): Promise<void> {
    return apiClient.delete<void>(API_ENDPOINTS.careers.delete(id));
  },

  // Apply job (file upload pakai FormData)
  apply(id: string, formData: FormData): Promise<Application> {
    return apiClient.post<Application>(API_ENDPOINTS.careers.apply(id), formData);
  },

  getApplications(id: string): Promise<Application[]> {
    return apiClient.get<Application[]>(API_ENDPOINTS.careers.applications(id));
  },
};