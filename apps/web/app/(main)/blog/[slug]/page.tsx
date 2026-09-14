import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format, isValid } from "date-fns";
import { id as localeId } from "date-fns/locale";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@bamcargo/ui/breadcrumb";
import { Badge } from "@bamcargo/ui/badge";
import { ArticleService } from "@bamcargo/core";
import type { PublicArticle } from "@bamcargo/core";

export const dynamic = "force-dynamic";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  let article: PublicArticle | null = null;

  try {
    article = await ArticleService.getBySlug(slug);
  } catch {
    notFound();
  }

  if (!article) {
    notFound();
  }

  const rawDate = article.created_at
    ? new Date(article.created_at)
    : new Date(NaN);
  const formattedDate = isValid(rawDate)
    ? format(rawDate, "dd MMMM yyyy", { locale: localeId })
    : "Tanggal tidak diketahui";

  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://bamcargo.co.id";
  const imageUrl = article.image_url?.startsWith("http")
    ? article.image_url
    : `${baseUrl}${article.image_url}`;

  console.log(imageUrl)
  return (
    <div className="bg-background min-h-screen py-12 md:py-12 font-sans">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {article.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article>
          <header className="mb-12">
            <time
              dateTime={isValid(rawDate) ? rawDate.toISOString() : undefined}
              className="block text-sm font-bold text-red-600 dark:text-red-500 tracking-widest uppercase mb-4"
            >
              {formattedDate}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {article.tags.map((tag) => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </header>

          {article.image_url && (
            <figure className="relative w-full aspect-[16/9] md:aspect-[2/1] mb-12 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md">
              <Image
                src={imageUrl}
                alt={`Ilustrasi untuk artikel: ${article.title}`}
                className="object-cover"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </figure>
          )}

          <div className="mx-auto max-w-[750px]">
            <div
              className="prose prose-lg md:prose-xl dark:prose-invert prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-loose prose-p:my-8 prose-a:text-red-600 dark:prose-a:text-red-500 hover:prose-a:text-red-700 dark:hover:prose-a:text-red-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm prose-blockquote:border-l-red-600 prose-blockquote:bg-red-50 dark:prose-blockquote:bg-red-900/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: article.content || "" }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}
