import { CarouselBanner } from '@/components/banner-carrousel';
import { BottomNavigation } from '@/components/bottom-navigation';
import { CekOngkirForm } from '@/components/cek-ongkir-form';

import { CekOngkirMotorForm } from '@/components/cek-ongkir-mtr-form';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from './../layouts/dashboard';

export default function Home() {
    const data = [
        { title: 'Cek Resi', url: '#cek-resi', icon: '' },
        { title: 'Cek Ongkir', url: '#cek-ongkir', icon: '' },
    ];
    return (
        <>
            <DashboardLayout>
                <CarouselBanner />
                <Separator />
                <div className="flex w-full flex-col items-center justify-center space-y-5">
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Cek Ongkir Cargo
                    </h1>
                    <CekOngkirForm id="cek-ongkir" />
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Cek Ongkir Motor
                    </h1>
                    <CekOngkirMotorForm id="cek-ongkir" />
                    <BottomNavigation />
                </div>
            </DashboardLayout>
        </>
    );
}
