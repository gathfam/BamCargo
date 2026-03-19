import { Card, CardContent } from "@/components/ui/card";

export function ArticleHeader() {
  return (
    <Card className="text-center mb-12">
      <CardContent className="pt-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Berita Terbaru
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Ikuti informasi terbaru seputar layanan kami, tips logistik, dan
          berita penting lainnya dari Bamcargo.
        </p>
      </CardContent>
    </Card>
  );
}
