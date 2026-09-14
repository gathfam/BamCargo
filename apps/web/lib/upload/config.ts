// src/lib/upload/config.ts
export const UPLOAD_CONFIG = {
  // Paths (relative to project root & public dir)
  fsBaseDir: "public/uploads",
  publicBaseUrl: "/uploads",

  // File Constraints
  maxFileSizeBytes: 5 * 1024 * 1024, // 5MB
  allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],

  // Image Processing Defaults
  imageQuality: 80,
  maxWidth: 1920,
  maxHeight: 1080,

  // Content Limits
  maxTagsPerArticle: 10,
} as const;

export type UploadConfig = typeof UPLOAD_CONFIG;
