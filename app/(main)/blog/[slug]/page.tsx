import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Article } from "@/types/api";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/article/slug/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch article details");
  }

  const { data } = await res.json();
  return data;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-12 md:py-12 font-sans">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigasi Kembali */}

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
              dateTime={article.created_at}
              className="block text-sm font-bold text-red-600 dark:text-red-500 tracking-widest uppercase mb-4"
            >
              {format(new Date(article.created_at), "dd MMMM yyyy", {
                locale: localeId,
              })}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              {article.title}
            </h1>
          </header>

          {article.image_url && (
            <figure className="relative w-full aspect-[16/9] md:aspect-[2/1] mb-12 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md">
              <Image
                src={article.image_url}
                alt={`Ilustrasi untuk artikel: ${article.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </figure>
          )}
          <div className="mx-auto max-w-[750px]">
            <div
              className="prose prose-lg md:prose-xl dark:prose-invert prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-loose prose-p:my-8 prose-a:text-red-600 dark:prose-a:text-red-500 hover:prose-a:text-red-700 dark:hover:prose-a:text-red-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm prose-blockquote:border-l-red-600 prose-blockquote:bg-red-50 dark:prose-blockquote:bg-red-900/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: article.content || "" }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}
