import { AppSidebar } from '@/components/app-sidebar';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from 'sonner';

type dashboardComponentProps = React.PropsWithChildren<{}>;
export default function DashboardLayout({
    children,
    ...props
}: dashboardComponentProps) {
    // let location = useLocation();
    return (
        <SidebarProvider defaultOpen={true}>
            <SidebarInset>
                <header className="fixed z-50 flex h-16 w-full shrink-0 gap-2 bg-[#fafafa] shadow-md transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex w-full items-center justify-between gap-2 px-4">
                        <AppSidebar />

                        <img
                            src="./storage/assets/images/logo-Bam-Cargo-100.png"
                            alt=""
                            width={64}
                        />
                        <a />
                    </div>
                </header>
                <Toaster position='top-right' richColors/>
                <div className="mt-20 h-full w-full space-y-10 bg-[#fafafa] px-0 md:px-10 lg:px-70">
                    {children}
                </div>

                {/* <BottomNavigation /> */}
                <div id="footer" className="my-10" />
            </SidebarInset>
        </SidebarProvider>
    );
}
