import { notFound } from "next/navigation"
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server"
import { BackButton } from "@/components/admin/back-button"
import { GalleryForm } from "@/components/admin/gallery/gallery-form"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditGalleryPage({ params }: PageProps) {
  const { id: idStr } = await params
  const id = parseInt(idStr, 10)

  if (isNaN(id)) {
    notFound()
  }

  const gallery = await GalleryServerService.getById(id)
  if (!gallery) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <BackButton fallbackHref="/admin/gallery" />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Edit Foto Galeri
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Edit informasi gambar untuk album galeri BAM Cargo.
          </p>
        </div>

        <GalleryForm mode="edit" initialData={gallery} />
      </main>
    </div>
  )
}
