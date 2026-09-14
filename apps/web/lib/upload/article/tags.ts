import { UPLOAD_CONFIG } from "@/lib/upload/config";

/**
 * Normalizes a raw tag string: trims, lowercases, removes empties & duplicates.
 */
export function normalizeTags(tags: string[]): string[] {
  const seen = new Set<string>();
  const normalized: string[] = [];

  for (const tag of tags) {
    const clean = tag.trim().toLowerCase();
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      normalized.push(clean);
    }
  }

  return normalized;
}

/**
 * Parses tag input from API payload (string or string[]) into normalized string[].
 * Enforces max tag limit from centralized config.
 */
export function parseTagsInput(input: unknown): string[] {
  if (!input) return [];

  // Handle comma-separated string: "nextjs, react, typescript"
  if (typeof input === "string") {
    const raw = input
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const normalized = normalizeTags(raw);

    if (normalized.length > UPLOAD_CONFIG.maxTagsPerArticle) {
      throw new Error(
        `Maximum ${UPLOAD_CONFIG.maxTagsPerArticle} tags allowed`,
      );
    }
    return normalized;
  }

  // Handle array input: ["nextjs", "react"]
  if (Array.isArray(input)) {
    const stringTags = input.filter((t): t is string => typeof t === "string");
    const normalized = normalizeTags(stringTags);

    if (normalized.length > UPLOAD_CONFIG.maxTagsPerArticle) {
      throw new Error(
        `Maximum ${UPLOAD_CONFIG.maxTagsPerArticle} tags allowed`,
      );
    }
    return normalized;
  }

  // Fallback: treat unexpected types as empty
  return [];
}

/**
 * Zod transform helper: safe wrapper for schema usage.
 * Usage: ArticleBaseSchema.extend({ tags: z.unknown().transform(parseTagsInputZod) })
 */
export function parseTagsInputZod(input: unknown): string[] {
  try {
    return parseTagsInput(input);
  } catch (error) {
    // Re-throw as Zod-friendly error message
    throw new Error(
      error instanceof Error ? error.message : "Invalid tag format",
    );
  }
}
