import { BackButton } from "@/components/admin/back-button";
import { ArticleForm } from "@/components/admin/articles/article-form";

export default function CreateArticlePage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <BackButton fallbackHref="/admin/artikel" />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Tambah Artikel Baru
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Tulis konten dan publish artikel ke blog Bamcargo
          </p>
        </div>

        <ArticleForm mode="create" />
      </main>
    </div>
  );
}