import type { Metadata } from "next";
import { LegalLayout, Section, LegalList } from "@/components/main/legal-layout";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan layanan pengiriman BAM Cargo.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Syarat & Ketentuan" lastUpdated="1 Mei 2026">
      <p>
        Selamat datang di BAM Cargo. Syarat dan Ketentuan ini mengatur
        penggunaan website serta layanan pengiriman barang yang disediakan oleh
        BAM Cargo. Dengan mengakses website kami atau menggunakan layanan
        pengiriman, Anda dianggap telah membaca, memahami, dan menyetujui
        seluruh ketentuan di bawah ini.
      </p>

      <Section number={1} title="Definisi">
        <LegalList
          items={[
            "“BAM Cargo” adalah penyedia layanan pengiriman barang yang beralamat di Bumi Pemurus Permai, Jl. Raya Yudistira No. 36, Banjarmasin Selatan.",
            "“Pengguna” adalah setiap pihak yang mengakses website atau menggunakan layanan BAM Cargo.",
            "“Layanan” mencakup pengiriman cargo, pengiriman motor, frozen cargo, dan layanan terkait lainnya.",
            "“Barang Kiriman” adalah barang yang diserahkan oleh pengirim kepada BAM Cargo untuk dikirimkan kepada penerima.",
          ]}
        />
      </Section>

      <Section number={2} title="Penerimaan Syarat">
        <p>
          Dengan menggunakan layanan BAM Cargo, Anda menyatakan telah berusia
          minimal 18 tahun atau telah memperoleh persetujuan dari orang tua
          atau wali, serta memiliki kapasitas hukum untuk mengikatkan diri pada
          syarat dan ketentuan ini.
        </p>
      </Section>

      <Section number={3} title="Layanan Pengiriman">
        <p>
          BAM Cargo menyediakan layanan pengiriman barang ke berbagai kota
          tujuan di Indonesia. Estimasi waktu pengiriman, tarif, dan jenis
          layanan yang tersedia dapat dilihat melalui kalkulator ongkos kirim
          di website kami atau dengan menghubungi customer service.
        </p>
        <p>
          Estimasi waktu pengiriman bersifat indikatif dan dapat berubah
          karena faktor di luar kendali kami seperti cuaca, kondisi
          transportasi, bencana alam, atau gangguan operasional lainnya.
        </p>
      </Section>

      <Section number={4} title="Tanggung Jawab Pengguna">
        <p>Pengguna wajib:</p>
        <LegalList
          items={[
            "Memberikan informasi yang akurat, lengkap, dan benar mengenai pengirim, penerima, dan barang kiriman",
            "Mengemas barang dengan baik dan sesuai standar agar tidak rusak selama proses pengiriman",
            "Tidak mengirimkan barang yang termasuk dalam kategori barang terlarang (lihat poin 7)",
            "Mendeklarasikan nilai barang dengan jujur, terutama untuk barang berharga",
            "Menyimpan resi pengiriman sebagai bukti transaksi",
          ]}
        />
      </Section>

      <Section number={5} title="Tanggung Jawab BAM Cargo">
        <p>BAM Cargo berkomitmen untuk:</p>
        <LegalList
          items={[
            "Mengirimkan barang dengan amanah, cepat, dan tepat sesuai dengan jenis layanan yang dipilih",
            "Memberikan informasi pelacakan pengiriman kepada pengguna",
            "Menanggapi keluhan dan klaim sesuai dengan ketentuan yang berlaku",
            "Menjaga kerahasiaan data pengguna sesuai Kebijakan Privasi",
          ]}
        />
      </Section>

      <Section number={6} title="Tarif dan Pembayaran">
        <p>
          Tarif pengiriman dihitung berdasarkan berat, dimensi, jenis layanan,
          dan kota tujuan. Pembayaran dapat dilakukan secara tunai, transfer,
          atau metode pembayaran lain yang kami sediakan. BAM Cargo berhak
          mengubah tarif sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
        </p>
      </Section>

      <Section number={7} title="Barang yang Dilarang Dikirim">
        <p>
          Untuk keamanan operasional dan kepatuhan terhadap regulasi, BAM Cargo
          tidak menerima pengiriman barang berikut:
        </p>
        <LegalList
          items={[
            "Narkotika, psikotropika, dan zat terlarang lainnya",
            "Senjata api, senjata tajam, bahan peledak, dan amunisi",
            "Bahan kimia berbahaya, mudah terbakar, atau beracun",
            "Uang tunai, surat berharga, perhiasan dengan nilai sangat tinggi tanpa asuransi",
            "Hewan hidup (kecuali ada layanan khusus yang disepakati)",
            "Barang yang melanggar hukum atau hak kekayaan intelektual pihak lain",
            "Barang yang dilarang oleh peraturan perundang-undangan yang berlaku",
          ]}
        />
        <p>
          BAM Cargo berhak menolak atau menahan pengiriman barang yang
          dicurigai termasuk dalam kategori di atas, serta melaporkannya kepada
          pihak berwenang apabila diperlukan.
        </p>
      </Section>

      <Section number={8} title="Klaim dan Ganti Rugi">
        <p>
          Apabila terjadi kerusakan, kehilangan, atau keterlambatan barang
          kiriman, pengguna dapat mengajukan klaim dengan ketentuan:
        </p>
        <LegalList
          items={[
            "Klaim diajukan paling lambat 7 (tujuh) hari kerja sejak barang diterima atau seharusnya diterima",
            "Pengguna wajib menunjukkan resi pengiriman asli sebagai bukti",
            "Klaim disertai dengan dokumentasi pendukung (foto, video, atau bukti lain) yang relevan",
            "Besaran ganti rugi mengikuti kebijakan internal BAM Cargo dan/atau ketentuan asuransi yang berlaku",
          ]}
        />
        <p>
          Untuk barang dengan nilai tinggi, pengguna disarankan untuk
          menggunakan layanan asuransi tambahan yang tersedia.
        </p>
      </Section>

      <Section number={9} title="Pembatasan Tanggung Jawab">
        <p>
          BAM Cargo tidak bertanggung jawab atas kerugian tidak langsung,
          insidental, atau konsekuensial yang timbul dari penggunaan layanan,
          termasuk namun tidak terbatas pada kehilangan keuntungan, kehilangan
          peluang bisnis, atau kerusakan reputasi.
        </p>
        <p>
          BAM Cargo juga tidak bertanggung jawab atas keterlambatan atau
          kegagalan pengiriman yang disebabkan oleh keadaan kahar (force
          majeure) seperti bencana alam, kerusuhan, kebijakan pemerintah, atau
          peristiwa lain di luar kendali wajar BAM Cargo.
        </p>
      </Section>

      <Section number={10} title="Hak Kekayaan Intelektual">
        <p>
          Seluruh konten website BAM Cargo, termasuk logo, teks, gambar,
          desain, dan kode, merupakan hak milik BAM Cargo dan dilindungi oleh
          hukum hak kekayaan intelektual. Penggunaan tanpa izin tertulis dari
          BAM Cargo dilarang.
        </p>
      </Section>

      <Section number={11} title="Perubahan Syarat dan Ketentuan">
        <p>
          BAM Cargo berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu.
          Perubahan akan dipublikasikan di website dengan mencantumkan tanggal
          pembaruan. Penggunaan layanan setelah perubahan dianggap sebagai
          persetujuan terhadap syarat yang baru.
        </p>
      </Section>

      <Section number={12} title="Hukum yang Berlaku dan Penyelesaian Sengketa">
        <p>
          Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum
          Negara Republik Indonesia. Setiap sengketa yang timbul akan
          diselesaikan secara musyawarah terlebih dahulu. Apabila musyawarah
          tidak mencapai kesepakatan, sengketa akan diselesaikan melalui
          Pengadilan Negeri Banjarmasin.
        </p>
      </Section>

      <Section number={13} title="Hubungi Kami">
        <p>
          Pertanyaan atau klarifikasi mengenai Syarat dan Ketentuan ini dapat
          disampaikan melalui:
        </p>
        <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-4 space-y-1 text-sm">
          <p>
            <strong>BAM Cargo</strong>
          </p>
          <p>
            Bumi Pemurus Permai, Jl. Raya Yudistira No. 36, Pemurus Dalam,
            Banjarmasin Selatan, Kalimantan Selatan 70248
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:bamcargo1975@gmail.com"
              className="text-orange-600 hover:underline"
            >
              bamcargo1975@gmail.com
            </a>
          </p>
          <p>
            Telepon/WhatsApp:{" "}
            <a
              href="tel:+6281351895522"
              className="text-orange-600 hover:underline"
            >
              0813-5189-5522
            </a>
          </p>
        </div>
      </Section>
    </LegalLayout>
  );
}