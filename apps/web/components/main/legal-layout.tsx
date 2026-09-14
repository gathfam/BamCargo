import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <header className="border-b pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Terakhir diperbarui: {lastUpdated}
          </p>
        </header>

        <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          {children}
        </article>

        <footer className="mt-16 pt-6 border-t text-sm text-muted-foreground">
          <p>
            Jika ada pertanyaan, silakan hubungi kami di{" "}
            <a
              href="mailto:bamcargo1975@gmail.com"
              className="text-orange-600 hover:underline"
            >
              bamcargo1975@gmail.com
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

// Helper components untuk konsistensi typography
export function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
        {number}. {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}