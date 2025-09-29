'use client';
import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerMuteButton,
    VideoPlayerPlayButton,
    VideoPlayerSeekBackwardButton,
    VideoPlayerSeekForwardButton,
    VideoPlayerTimeDisplay,
    VideoPlayerTimeRange,
    VideoPlayerVolumeRange,
} from '@/components/ui/kibo-ui/video-player';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from './../layouts/dashboard';

export default function About() {
    return (
        <>
            <DashboardLayout>
                <div className="flex w-full flex-col items-center justify-center space-y-5">
                    <VideoPlayer className="overflow-hidden rounded-lg border">
                        <VideoPlayerContent
                            crossOrigin=""
                            muted
                            preload="auto"
                            slot="media"
                            src="./storage/assets/video/bamcargo-about.mp4"
                        />
                        <VideoPlayerControlBar>
                            <VideoPlayerPlayButton />
                            <VideoPlayerSeekBackwardButton />
                            <VideoPlayerSeekForwardButton />
                            <VideoPlayerTimeRange />
                            <VideoPlayerTimeDisplay showDuration />
                            <VideoPlayerMuteButton />
                            <VideoPlayerVolumeRange />
                        </VideoPlayerControlBar>
                    </VideoPlayer>
                    <Separator />
                </div>
                <div>
                    <h2 className="bopb-2 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Tentang Kami
                    </h2>
                </div>
                <div className="flex flex-col -space-y-5">
                    <Label>BAM Cargo – Amanah, Cepat & Tepat 2014</Label>
                    <p className="text-justify leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
                        Borneo Arta Mandiri (BAM Cargo) adalah perusahaan Jasa
                        Penyelenggaraan POS yang berdiri pada tanggal 29 Januari
                        2014 di Banjarmasin, Indonesia. Izin Penyelenggaraan Pos
                        Nasional Nomor 1440 Tahun 2017, yang di keluarkan oleh
                        Menteri Komunikasi dan Informatika Republik Indonesia.
                    </p>
                </div>
                <div className="flex flex-col -space-y-5">
                    <Label>BAM Cargo – Amanah, Cepat & Tepat 2023</Label>
                    <p className="text-justify leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
                        Dengan semangat kami dalam melayani Customer Setia Bam
                        Cargo, berkat rahmat Allah SWT, sekarang kami sudah
                        memiliki cabang dan gerai di seluruh Kalimantan, Pulau
                        Jawa, dan seluruh Indonesia. <br />
                        <br /> Kami akan selalu memberikan pelayanan terbaik
                        dalam proses handling dan distribusi perpindahan barang
                        paket ke seluruh Indonesia dengan tenaga profesional
                        yang amanah dalam menjaga paket/barang dari penjemputan
                        hingga distribusi delivery ke penerima dengan aman dan
                        cepat. <br />
                        <br />
                        Cabang dan gerai kami terbaru berada di kota Balikpapan,
                        Samarinda, Tarakan, Palangkaraya, Kota Pontianak, serta
                        di Pulau Jawa kota Semarang, Surabaya, dan Jakarta yang
                        siap mendistribusikan paket dan barang Anda menuju
                        seluruh Kalimantan dan seluruh Indonesia. <br />
                        <br />
                        Semoga kami selalu bisa memberikan pelayanan terbaik
                        dari team kami untuk seluruh pelanggan setia dan
                        pelanggan baru Bam Cargo seluruh Indonesia.
                    </p>
                </div>
            </DashboardLayout>
        </>
    );
}
{
    /* <iframe width="2330" height="1098" src="https://www.youtube.com/embed/-QJn8qgNo_E" title="Perkenalan BAMCargo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
