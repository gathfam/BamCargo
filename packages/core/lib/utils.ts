import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function autoScrollOnFocus(
  e: React.FocusEvent<HTMLElement> | HTMLElement,
  delay: number = 300,
) {
  const target = "target" in e ? (e.target as HTMLElement) : e;

  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, delay);
}

export function getImageUrl(path?: string | null): string {
  if (!path) return "";

  // Convert absolute bamcargo URLs to relative untuk Image Optimization
  if (path.startsWith("http")) {
    const uploadIndex = path.indexOf("/uploads/");
    if (uploadIndex !== -1) {
      return path.slice(uploadIndex); // /uploads/banners/...
    }
    return path; // External URL (bukan bamcargo), return as-is
  }

  // Return relative path untuk Next.js Image Optimization
  return path.startsWith("/") ? path : `/${path}`;
}

export function parseTags(raw: unknown): string[] | null {
  if (raw == null) return null
  if (Array.isArray(raw)) {
    const arr = raw.filter((t): t is string => typeof t === "string")
    return arr.length > 0 ? arr : null
  }
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed)) return null
      const arr = parsed.filter((t): t is string => typeof t === "string")
      return arr.length > 0 ? arr : null
    } catch {
      return null
    }
  }
  return null
}

