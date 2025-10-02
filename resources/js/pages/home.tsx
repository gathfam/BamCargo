import { CarouselBanner } from '@/components/banner-carrousel';
import { BottomNavigation } from '@/components/bottom-navigation';
import { CekOngkirForm } from '@/components/cek-ongkir-form';

import { CekOngkirMotorForm } from '@/components/cek-ongkir-mtr-form';
import { CekResi } from '@/components/cek-resi-form';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FloatingWhatsAppIcon } from './../components/floating-wa-button';
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
                    <div className="mt-5 w-[350px] sm:w-[600px]">
                        <h1 className="mb-5 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                            Cek Resi
                        </h1>
                        <CekResi />
                    </div>
                    <Tabs defaultValue="ongkir-kargo" className="w-fit">
                        <h1 className="mb-5 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                            Cek Ongkir Cargo
                        </h1>
                        <TabsList className="h-12 w-full">
                            <TabsTrigger value="ongkir-kargo">
                                Kargo
                            </TabsTrigger>
                            <TabsTrigger value="ongkir-motor">
                                Motor
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="ongkir-kargo"
                            className="w-[350px] sm:w-[600px]"
                        >
                            <CekOngkirForm id="cek-ongkir" />
                        </TabsContent>
                        <TabsContent
                            value="ongkir-motor"
                            className="w-[350px] sm:w-[600px]"
                        >
                            <CekOngkirMotorForm id="cek-ongkir" />
                        </TabsContent>
                    </Tabs>
                    <FloatingWhatsAppIcon />
                    <BottomNavigation />
                </div>
            </DashboardLayout>
        </>
    );
}
