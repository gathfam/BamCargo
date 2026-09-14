import { z } from "zod";
import { parseTagsInputZod, normalizeTags } from "@/lib/upload/article/tags";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const ArticleBaseSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi").trim(),
  content: z.string().min(1, "Konten wajib diisi").trim(),
  status: z.enum(["published", "draft"]).default("published"),
  tags: z.unknown().transform(parseTagsInputZod),
});

export const ArticleCreateSchema = ArticleBaseSchema.transform((data) => ({
  ...data,
  slug: slugify(data.title),
}));

export const ArticleUpdateSchema = ArticleBaseSchema.partial();

export function validateTagsFromFormData(formData: FormData): string[] {
  const rawTags = formData.getAll("tags");
  return normalizeTags(rawTags.map((t) => String(t)));
}
