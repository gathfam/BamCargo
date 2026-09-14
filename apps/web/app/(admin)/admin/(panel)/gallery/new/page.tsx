import { BackButton } from "@/components/admin/back-button";
import { GalleryForm } from "@/components/admin/gallery/gallery-form";

export default function NewBannerPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <BackButton fallbackHref="/admin/gallery" />

        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Tambah Gambar Baru
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Masukkan kenangan ke dalam gallery
          </p>
        </div>

        <GalleryForm mode="create" />
      </main>
    </div>
  );
}