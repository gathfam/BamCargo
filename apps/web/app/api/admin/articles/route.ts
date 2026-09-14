import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getUserSessionId, isAuthorizedAutomation } from "@/lib/auth";
import type { ArticleStatus } from "@bamcargo/core/types/article-types";
import { UPLOAD_CONFIG } from "@/lib/upload/config";
import { ArticleServerService } from "@bamcargo/core/services/article-service-server";
import { ArticleCreateSchema } from "@/lib/article-schema";
import {
  processImage,
  saveUploadedImage,
  validateImageFile,
} from "@/lib/upload/image";
import { parseTagsInput } from "@/lib/upload/article/tags";
const { maxFileSizeBytes } = UPLOAD_CONFIG;

const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp"];

// ============ GET list (admin) ============

export async function GET(req: NextRequest) {
  const userId = await getUserSessionId();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);

  const result = await ArticleServerService.list({
    page: parseInt(searchParams.get("page") || "1", 10),
    limit: parseInt(searchParams.get("limit") || "10", 10),
    status: searchParams.get("status") as ArticleStatus | undefined,
    tag: searchParams.get("tag") ?? undefined,
  });

  return NextResponse.json(result);
}

// ============ POST create ============
export async function POST(req: NextRequest) {
  try {
    let userId: number;

    if (isAuthorizedAutomation(req)) {
      // request dari n8n, pakai akun service khusus
      userId = Number(process.env.AUTOMATION_AUTHOR_ID);
    } else {
      const sessionUserId = await getUserSessionId();
      if (!sessionUserId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      userId = sessionUserId;
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    const raw = {
      title: formData.get("title") as string | null,
      content: formData.get("content") as string | null,
      status: formData.get("status") as string | null,
      tags: formData.get("tags") as string | null,
    };

    const parsed = ArticleCreateSchema.safeParse(raw);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json({ error: firstError.message }, { status: 400 });
    }

    const { title, content, status, slug } = parsed.data;
    const tags = parseTagsInput(raw.tags);

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { error: "Gambar cover wajib diupload" },
        { status: 400 },
      );
    }
    if (file.size > maxFileSizeBytes) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 2MB" },
        { status: 400 },
      );
    }
    if (!ALLOWED_MIME.includes(file.type)) {
      return NextResponse.json(
        { error: "Format gambar harus JPG, PNG, atau WebP" },
        { status: 400 },
      );
    }

    validateImageFile({ size: file.size, type: file.type });

    const buffer = Buffer.from(await file.arrayBuffer());
    const processed = await processImage(buffer);
    const publicUrl = await saveUploadedImage(processed, file.name, "articles");

    const created = await ArticleServerService.create({
      author_id: userId,
      title,
      slug,
      content,
      image_url: publicUrl,
      status,
      tags,
    });

    revalidateTag("articles", "max");

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("[POST /api/admin/articles] error:", error);
    return NextResponse.json(
      { error: "Gagal membuat artikel" },
      { status: 500 },
    );
  }
}
