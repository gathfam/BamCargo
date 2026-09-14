import type { PaginatedResponse, PaginationParams } from "./api";

export type JobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
export type ApplicationStatus = "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED";

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  requirements: string;
  salary?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobListItem {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: JobType;
  createdAt: string;
}

export interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  cvUrl: string;
  coverLetter?: string | null;
  jobId: string;
  status: ApplicationStatus;
  createdAt: string;
}

export interface CreateJobDto {
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  requirements: string;
  salary?: string;
}

export type UpdateJobDto = Partial<CreateJobDto> & {
  isActive?: boolean;
};

export interface ApplyJobDto {
  fullName: string;
  email: string;
  phone: string;
  cvUrl: string;
  coverLetter?: string;
}

export interface JobFilters extends PaginationParams {
  department?: string;
  location?: string;
  type?: JobType;
}

export type JobListResponse = PaginatedResponse<JobListItem>;