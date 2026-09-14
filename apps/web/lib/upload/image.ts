import sharp from "sharp";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { UPLOAD_CONFIG } from "./config";

export class UploadError extends Error {
  constructor(
    message: string,
    public statusCode = 400,
  ) {
    super(message);
    this.name = "UploadError";
  }
}

/**
 * Validates file size and MIME type against centralized config.
 */
export function validateImageFile(file: { size: number; type: string }) {
  const { maxFileSizeBytes, allowedMimeTypes } = UPLOAD_CONFIG;

  if (file.size > maxFileSizeBytes) {
    throw new UploadError(
      `File size exceeds maximum of ${maxFileSizeBytes / 1024 / 1024}MB`,
    );
  }
  if (
    !allowedMimeTypes.includes(file.type as (typeof allowedMimeTypes)[number])
  ) {
    throw new UploadError(
      `Unsupported file type. Allowed: ${allowedMimeTypes.join(", ")}`,
    );
  }
}

/**
 * Resizes, constrains, and converts image buffer to optimized WebP.
 */
export async function processImage(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .resize({
      width: UPLOAD_CONFIG.maxWidth,
      height: UPLOAD_CONFIG.maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: UPLOAD_CONFIG.imageQuality })
    .toBuffer();
}

export async function saveUploadedImage(
  processedBuffer: Buffer,
  originalName: string,
  subDir: string = "articles",
): Promise<string> {
  const { fsBaseDir, publicBaseUrl } = UPLOAD_CONFIG
  const safeBase = originalName.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 32)
  const fileName = `${Date.now()}-${safeBase}.webp`
  const targetDir = path.join(process.cwd(), fsBaseDir, subDir)
  const publicUrl = path.posix.join(publicBaseUrl, subDir, fileName)

  await mkdir(targetDir, { recursive: true })
  await writeFile(path.join(targetDir, fileName), processedBuffer)

  return publicUrl
}

export interface ProcessedImageResult {
  url: string
  width: number
  height: number
  isPortrait: boolean
}

/**
 * Resizes, processes, writes to disk, and returns detailed dimension and orientation info.
 */
export async function processAndSaveImageWithInfo(
  buffer: Buffer,
  originalName: string,
  subDir: string,
  options?: {
    maxWidth?: number
    maxHeight?: number
    quality?: number
  },
): Promise<ProcessedImageResult> {
  const image = sharp(buffer)
  const metadata = await image.metadata()
  if (!metadata.width || !metadata.height) {
    throw new UploadError("Gambar tidak valid")
  }

  const processed = await image
    .resize({
      width: options?.maxWidth ?? UPLOAD_CONFIG.maxWidth,
      height: options?.maxHeight ?? UPLOAD_CONFIG.maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: options?.quality ?? UPLOAD_CONFIG.imageQuality })
    .toBuffer({ resolveWithObject: true })

  const { fsBaseDir, publicBaseUrl } = UPLOAD_CONFIG
  const safeBase = originalName.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 32)
  const fileName = `${Date.now()}-${safeBase}.webp`
  const targetDir = path.join(process.cwd(), fsBaseDir, subDir)
  const publicUrl = path.posix.join(publicBaseUrl, subDir, fileName)

  await mkdir(targetDir, { recursive: true })
  await writeFile(path.join(targetDir, fileName), processed.data)

  return {
    url: publicUrl,
    width: processed.info.width,
    height: processed.info.height,
    isPortrait: processed.info.height > processed.info.width,
  }
}
