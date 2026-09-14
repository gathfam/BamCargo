import type { Metadata } from "next";
import { LegalLayout, Section, LegalList } from "@/components/main/legal-layout";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi PT BAM Cargo mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pengguna.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Kebijakan Privasi" lastUpdated="1 Mei 2026">
      <p>
        BAM Cargo berkomitmen melindungi privasi dan data pribadi setiap
        pengguna layanan kami. Kebijakan Privasi ini menjelaskan bagaimana kami
        mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda
        ketika Anda mengakses website atau menggunakan layanan pengiriman BAM
        Cargo.
      </p>
      <p>
        Dengan menggunakan layanan kami, Anda dianggap telah membaca, memahami,
        dan menyetujui seluruh isi Kebijakan Privasi ini.
      </p>

      <Section number={1} title="Informasi yang Kami Kumpulkan">
        <p>
          Untuk dapat memberikan layanan terbaik, kami mengumpulkan beberapa
          jenis informasi sebagai berikut:
        </p>
        <LegalList
          items={[
            "Nama lengkap pengirim dan penerima",
            "Nomor telepon dan/atau WhatsApp",
            "Alamat email",
            "Alamat asal pengiriman dan alamat tujuan",
            "Informasi mengenai barang yang dikirim (jenis, berat, dimensi, nilai barang)",
            "Nomor resi dan riwayat pengiriman",
            "Data teknis seperti alamat IP, jenis perangkat, dan browser yang digunakan saat mengakses website kami",
          ]}
        />
      </Section>

      <Section number={2} title="Cara Kami Menggunakan Informasi">
        <p>Informasi yang Anda berikan digunakan untuk tujuan berikut:</p>
        <LegalList
          items={[
            "Memproses dan mengirimkan barang ke alamat tujuan",
            "Memberikan informasi pelacakan (tracking) status pengiriman",
            "Menghubungi Anda terkait status pengiriman, klaim, atau pertanyaan layanan",
            "Menghitung biaya pengiriman dan memproses pembayaran",
            "Meningkatkan kualitas layanan dan pengalaman pengguna di website kami",
            "Memenuhi kewajiban hukum dan regulasi yang berlaku",
          ]}
        />
      </Section>

      <Section number={3} title="Pembagian Informasi kepada Pihak Ketiga">
        <p>
          Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak
          ketiga manapun. Namun, kami dapat membagikan informasi terbatas
          kepada:
        </p>
        <LegalList
          items={[
            "Mitra logistik dan kurir untuk keperluan operasional pengiriman",
            "Penyedia layanan pembayaran untuk memproses transaksi",
            "Pihak berwenang apabila diwajibkan oleh peraturan perundang-undangan",
          ]}
        />
        <p>
          Setiap pihak ketiga yang menerima data dari kami terikat untuk
          menjaga kerahasiaan data sesuai dengan ketentuan yang berlaku.
        </p>
      </Section>

      <Section number={4} title="Cookies dan Teknologi Pelacakan">
        <p>
          Website kami dapat menggunakan cookies untuk meningkatkan pengalaman
          pengguna, menganalisis lalu lintas website, dan menyimpan preferensi
          Anda. Anda dapat mengatur browser untuk menolak cookies, namun
          beberapa fitur website mungkin tidak berfungsi dengan optimal.
        </p>
      </Section>

      <Section number={5} title="Keamanan Data">
        <p>
          Kami menerapkan langkah keamanan teknis dan organisasional yang wajar
          untuk melindungi data Anda dari akses tidak sah, perubahan,
          pengungkapan, atau penghancuran. Namun, perlu dipahami bahwa tidak
          ada metode transmisi data melalui internet yang sepenuhnya aman.
        </p>
      </Section>

      <Section number={6} title="Penyimpanan Data">
        <p>
          Data pribadi Anda akan kami simpan selama diperlukan untuk memenuhi
          tujuan pengumpulan, memenuhi kewajiban hukum, atau menyelesaikan
          sengketa yang mungkin timbul. Data riwayat pengiriman dapat disimpan
          dalam jangka waktu tertentu untuk kepentingan pencatatan dan audit.
        </p>
      </Section>

      <Section number={7} title="Hak-Hak Anda">
        <p>
          Sesuai dengan Undang-Undang Pelindungan Data Pribadi yang berlaku di
          Indonesia, Anda memiliki hak untuk:
        </p>
        <LegalList
          items={[
            "Mengakses data pribadi yang kami simpan tentang Anda",
            "Meminta perbaikan data yang tidak akurat atau tidak lengkap",
            "Meminta penghapusan data pribadi (dengan ketentuan tertentu)",
            "Menarik persetujuan pemrosesan data kapan saja",
            "Mengajukan keluhan atas pemrosesan data Anda",
          ]}
        />
        <p>
          Untuk menggunakan hak-hak di atas, silakan hubungi kami melalui
          informasi kontak di bagian akhir kebijakan ini.
        </p>
      </Section>

      <Section number={8} title="Anak di Bawah Umur">
        <p>
          Layanan kami tidak ditujukan untuk anak di bawah usia 18 tahun. Kami
          tidak secara sengaja mengumpulkan data pribadi dari anak di bawah
          umur. Apabila Anda mengetahui bahwa anak Anda telah memberikan data
          kepada kami, mohon segera hubungi kami untuk dilakukan penghapusan.
        </p>
      </Section>

      <Section number={9} title="Perubahan Kebijakan Privasi">
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
          Perubahan akan diumumkan melalui website ini dengan mencantumkan
          tanggal pembaruan terbaru. Kami menyarankan Anda untuk meninjau
          kebijakan ini secara berkala.
        </p>
      </Section>

      <Section number={10} title="Hubungi Kami">
        <p>
          Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait
          Kebijakan Privasi ini, silakan hubungi kami melalui:
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