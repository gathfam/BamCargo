import Link from "next/link";

export const dynamic = "force-dynamic";
import { ArticleServerService } from "@bamcargo/core/services/article-service-server";
import { BannerServerService } from "@bamcargo/core/services/banner-service-server";
import { GalleryServerService } from "@bamcargo/core/services/gallery-service-server";
import { Button } from "@bamcargo/ui/button";
import { Card } from "@bamcargo/ui/card";
import {
  FileText,
  Image as ImageIcon,
  Images,
  Briefcase,
  Receipt,
  Plus,
} from "lucide-react";

interface ResourceCard {
  title: string;
  description: string;
  count: number;
  icon: typeof FileText;
  href: string;
  newHref?: string;
  available: boolean;
}

export default async function AdminDashboardPage() {
  let articleCount = 0;
  let bannerCount = 0;
  let galleryCount = 0;

  try {
    const articles = await ArticleServerService.list({ page: 1, limit: 1 });
    articleCount = articles.pagination.total;
  } catch (err) {
    console.error("[AdminDashboard] failed fetch articles:", err);
  }

  try {
    const banners = await BannerServerService.list({ page: 1, limit: 1 });
    bannerCount = banners.pagination.total;
  } catch (err) {
    console.error("[AdminDashboard] failed fetch banners:", err);
  }

  try {
    const galleries = await GalleryServerService.list({ page: 1, limit: 1 });
    galleryCount = galleries.pagination.total;
  } catch (err) {
    console.error("[AdminDashboard] failed fetch galleries:", err);
  }

  const resources: ResourceCard[] = [
    {
      title: "Artikel",
      description: "Kelola artikel blog yang tampil di halaman publik.",
      count: articleCount,
      icon: FileText,
      href: "/admin/artikel",
      newHref: "/admin/artikel/new",
      available: true,
    },
    {
      title: "Banner",
      description: "Kelola banner carousel yang tampil di homepage.",
      count: bannerCount,
      icon: ImageIcon,
      href: "/admin/banner",
      newHref: "/admin/banner/new",
      available: true,
    },
    {
      title: "Galeri",
      description: "Kelola dokumentasi foto operasional dan kegiatan.",
      count: galleryCount,
      icon: Images,
      href: "/admin/gallery",
      newHref: "/admin/gallery/new",
      available: true,
    },
    {
      title: "Karir",
      description: "Kelola lowongan pekerjaan (segera hadir).",
      count: 0,
      icon: Briefcase,
      href: "#",
      available: false, // Ubah ke true jika halaman list admin karir sudah kamu buat
    },
    {
      title: "Resi",
      description: "Manajemen tracking resi (segera hadir).",
      count: 0,
      icon: Receipt,
      href: "#",
      available: false,
    },
  ];

  return (
    <div className="bg-background">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-muted-foreground mt-1">
            Selamat datang di panel admin BAM Cargo. Pilih resource yang ingin
            dikelola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <Card
                key={res.title}
                className={`p-6 transition hover:shadow-md ${
                  !res.available ? "opacity-60" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  {res.available && (
                    <div className="text-right">
                      <div className="text-3xl font-bold leading-none">
                        {res.count}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        total
                      </div>
                    </div>
                  )}
                </div>

                <h2 className="text-lg font-semibold mb-1">{res.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                  {res.description}
                </p>

                {res.available ? (
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Link href={res.href}>Kelola</Link>
                    </Button>
                    {res.newHref && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={res.newHref}>
                          <Plus className="mr-1 h-4 w-4" />
                          Baru
                        </Link>
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button disabled size="sm" className="w-full">
                    Segera Hadir
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
