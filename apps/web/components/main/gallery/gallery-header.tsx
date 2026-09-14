import { Card, CardContent } from "@bamcargo/ui/card"

export function GalleryHeader() {
  return (
    <Card className="text-center mb-12">
      <CardContent className="pt-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Galeri BAM Cargo
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Dokumentasi kegiatan operasional, armada, dan momen penting dari
          perjalanan BAM Cargo melayani Indonesia.
        </p>
      </CardContent>
    </Card>
  )
}
