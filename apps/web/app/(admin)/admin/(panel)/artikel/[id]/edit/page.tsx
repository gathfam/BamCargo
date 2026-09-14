import { notFound } from "next/navigation";
import { ArticleServerService } from "@bamcargo/core/services/article-service-server";
import { BackButton } from "@/components/admin/back-button";
import { ArticleForm } from "@/components/admin/articles/article-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: PageProps) {
  const { id: idStr } = await params;
  const id = parseInt(idStr, 10);

  if (isNaN(id)) {
    notFound();
  }

  const article = await ArticleServerService.getById(id);
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <BackButton fallbackHref="/admin/artikel" />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Edit Artikel
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Status saat ini:{" "}
            <span className="font-semibold">
              {article.isPublished ? "Published" : "Draft"}
            </span>
          </p>
        </div>

        <ArticleForm mode="edit" article={article} />
      </main>
    </div>
  );
}