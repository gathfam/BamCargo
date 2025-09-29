import { AppSidebar } from '@/components/app-sidebar';

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

type dashboardComponentProps = React.PropsWithChildren<{}>;
export default function DashboardLayout({
    children,
    ...props
}: dashboardComponentProps) {
    // let location = useLocation();
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 bg-[#fafafa] transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex w-full items-center justify-center gap-2 px-4">
                        {/* <SidebarTrigger className="-ml-1" /> */}
                        <img
                            src="./storage/assets/images/logo-Bam-Cargo-100.png"
                            alt=""
                            width={64}
                        />
                        
                    </div>
                </header>
                <div className="h-full w-full space-y-10 bg-[#fafafa] px-80">
                   {children}
                </div>

                {/* <BottomNavigation /> */}
                <div id="footer" className="my-10" />
            </SidebarInset>
        </SidebarProvider>
    );
}
