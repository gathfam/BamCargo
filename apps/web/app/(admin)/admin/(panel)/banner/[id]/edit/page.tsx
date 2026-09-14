import { BannerServerService } from "@bamcargo/core/services/banner-service-server";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/admin/back-button";
import { BannerForm } from "@/components/admin/banners/banner-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBannerPage({ params }: PageProps) {
  const { id: idStr } = await params;
  const id = parseInt(idStr, 10);
  if (isNaN(id)) notFound();

  const banner = await BannerServerService.getById(id);
  if (!banner) notFound();

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <BackButton
            fallbackHref="/admin/banner"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Edit Banner
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Mengubah banner:{" "}
            <span className="font-semibold">{banner.title}</span>
          </p>
        </div>

        <BannerForm mode="edit" initialData={banner} />
      </main>
    </div>
  );
}
