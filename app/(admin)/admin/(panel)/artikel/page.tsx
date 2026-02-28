import { PlusCircle, Edit, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const articles = [
  {
    id: 1,
    title: "Ekspansi Rute Baru ke Wilayah Sumatera Utara",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBynWJOeEiWDimgSkM0cxu7u7Dp-ZGYLM83H4yUN-NAHJv0b1K1e9pHrc8vhO5nkATkYQSWe-fnj6E8M6qOfMaSSj9gL56jfjVEyyPfg55QmNNJ4qqt6mNxPB6yMmItC4o8djKg0sX8bURBtfc31EW61yK9GQwotYzdkG1O0t-6RL6CQh7x4ObXTqTM6oIZwGpJbqxp1hsJhv95HxqaS2k-llpjDtV8jl99i5AloqZkUu3N9IW1-UdpdC8HWQdzVBxIiSsUhinUq94",
    status: "Published",
    date: "24 Okt 2023",
  },
  {
    id: 2,
    title: "Tips Aman Mengirim Barang Pecah Belah Inter-Pulau",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCR9MTGiCQmEjgeSBBt9J-DbD4UTcC-DSin_4HnBEAWAp0HMk1Yd1isqdL0pC4iy96SxWjE1eoB4H07CQ8crasFc8a_sUsO9hSLIwK_v_GUWCHgix4TQrjjiikyyg6rUgMgmof0-J7tC2MTawI1Y3toZJqV2_beXWXt5bxFHUPvHxxiLHVWT-hRfRQFVSL5W6uPeKp5QU--GpJojPVUg6pi7E7wYE5Qfg9COSbi9s01EXPBoIs6iSUakACihO6jEouz166O7Z0hdxE",
    status: "Draft",
    date: "20 Okt 2023",
  },
  {
    id: 3,
    title: "Promo Akhir Tahun Bamcargo: Diskon Ongkir 20%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5IgklALfITTCpm3t6s6_b_DIWQfrGJx4Ds3EQVOn3zovs_55zENd7sXUatzqdObwgULBXQo3MJ_cTTaekJXKau3phEWup1DNDg9esBJJmXisFU3tf-IB5SNcd4Mw2rGidxkVT6vhiTR4EB3lYPRI9T1O7LBBjIjp9q4GkapQAlDI-KKBESF5vGhCDtWXVV1K5vyTJR0zcz-_ECvbuHwxnCVtxjqT4os9BgsSa8dWV189DfuOMxYZippKtIJp0Cy51W8RNnDbKbDc",
    status: "Published",
    date: "15 Okt 2023",
  },
];

export default function ArticleManagement() {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen bg-slate-50 dark:bg-[#211112]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Manajemen Artikel
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Kelola konten, berita, dan pembaruan logistik Bamcargo
          </p>
        </div>
        <Button className="flex items-center gap-2 px-6 py-6">
          <PlusCircle className="w-5 h-5" />
          Tambah Artikel Baru
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
            <TableRow className="border-b border-slate-200 dark:border-slate-800 hover:bg-transparent">
              <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs">
                Judul Artikel
              </TableHead>
              <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[150px]">
                Status
              </TableHead>
              <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs w-[150px]">
                Tanggal Dibuat
              </TableHead>
              <TableHead className="px-6 py-4 font-bold text-slate-900 dark:text-slate-300 uppercase text-xs text-right w-[120px]">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-slate-200 dark:divide-slate-800">
            {articles.map((article) => (
              <TableRow
                key={article.id}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors border-none"
              >
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden border border-slate-200 dark:border-slate-700">
                      <img
                        className="w-full h-full object-cover"
                        src={article.image}
                        alt={article.title}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                      {article.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5">
                  {article.status === "Published" ? (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 font-bold border-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      Published
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold border-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                      Draft
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="px-6 py-5 text-sm text-slate-500 dark:text-slate-400">
                  {article.date}
                </TableCell>
                <TableCell className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-md rounded-2xl">
                        <AlertDialogHeader>
                          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="w-8 h-8" />
                          </div>
                          <AlertDialogTitle className="text-center text-xl font-black">
                            Hapus Artikel?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-center">
                            Apakah Anda yakin ingin menghapus artikel ini?
                            Tindakan ini tidak dapat dibatalkan.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="sm:justify-center gap-2 mt-4">
                          <AlertDialogCancel className="flex-1 rounded-xl">
                            Batal
                          </AlertDialogCancel>
                          <AlertDialogAction className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white">
                            Ya, Hapus
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Menampilkan 1-3 dari 3 artikel
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled className="rounded-lg">
              Previous
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-slate-900 dark:bg-slate-700 rounded-lg"
            >
              1
            </Button>
            <Button variant="outline" size="sm" disabled className="rounded-lg">
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
