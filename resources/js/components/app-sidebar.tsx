'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Sidebar,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import {
    Bike,
    CalendarRange,
    ChevronRight,
    Container,
    House,
    Image,
    Info,
    Menu,
    MessageSquareText,
    Phone,
    Plane,
    Rss,
    Ship,
    Truck,
    Users,
} from 'lucide-react';
import * as React from 'react';
import { Button } from './ui/button';

// This is sample data.
const data = {
    navMain: [
        { title: 'Beranda', url: '/', icon: House },
        { title: 'Tentang Kami', url: '/tentang-kami', icon: Info },
    ],

    tarifA: [
        {
            title: 'Tarif Pengiriman Darat',
            url: '#',
            icon: Truck,
            items: [
                {
                    title: 'Tujuan Pulau Jawa',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau Sumatera',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau Bali',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau NTB',
                    url: '#',
                },
            ],
        },
        {
            title: 'Tarif Pengiriman Laut',
            url: '#',
            icon: Ship,
            items: [
                {
                    title: 'Tujuan Pulau Kalimantan',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau Sulawesi',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau NTT',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau Maluku',
                    url: '#',
                },
                {
                    title: 'Tujuan Pulau Papua',
                    url: '#',
                },
            ],
        },
    ],
    tarifB: [
        { title: 'Tarif Pengiriman Udara', url: '#', icon: Plane },
        { title: 'Tarif Kontainer', url: '#', icon: Container },
        { title: 'Tarif Kirim Motor', url: '#', icon: Bike },
    ],
    more: [
        { title: 'Jadwal Kapal', url: '#', icon: CalendarRange },
        { title: 'Blog', url: '#', icon: Rss },
        { title: 'Galeri', url: '#', icon: Image },
        { title: 'Testimonial', url: '#', icon: MessageSquareText },
        { title: 'Karir', url: '#', icon: Users },
        { title: 'Hubungi Kami', url: '#', icon: Phone },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // let location = useLocation();
    return (
        // <Sidebar variant="inset" collapsible="offcanvas" {...props}>
        //     <SidebarHeader className="flex items-center justify-center">
        //         {/* <TeamSwitcher teams={data.teams} /> */}

        //         <img
        //             src="https://bamcargo.co.id/wp-content/uploads/2023/02/logo-Bam-Cargo-100.png"
        //             alt="Logo Bamcargo"
        //             width={100}
        //         />
        //     </SidebarHeader>
        //     <Separator />
        //     <SidebarContent className="space-y-2 px-2">
        //
        //     </SidebarContent>
        //     {/* <SidebarFooter>{location}</SidebarFooter> */}
        //     <SidebarRail />
        // </Sidebar>
        <Sheet>
            <SheetTrigger>
                <Button variant={'secondary'} size={'icon'}>
                    <Menu size={32} />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className='overflow-auto'>
                <SheetHeader className="relative items-center justify-center">
                    {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                    <img
                        src="./storage/assets/images/logo-Bam-Cargo-100.png"
                        alt=""
                        width={'50%'}
                    />
                </SheetHeader>
                <div className="px-5 mb-10">
                    <div>
                        <SidebarGroupLabel>Menu</SidebarGroupLabel>

                        <SidebarMenu className="space-y-1">
                            {data.navMain.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.title}
                                            isActive={
                                                location.pathname == item.url
                                                    ? true
                                                    : false
                                            }
                                        >
                                            <a href={item.url}>
                                                <item.icon size={32} />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </div>
                    <div>
                        <SidebarGroupLabel>Tarif</SidebarGroupLabel>
                        <SidebarMenu className="space-y-1">
                            {data.tarifA.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    // defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <div className="my-2">
                                                <SidebarMenuSub>
                                                    {item.items?.map(
                                                        (subItem) => (
                                                            <SidebarMenuSubItem
                                                                key={
                                                                    subItem.title
                                                                }
                                                            >
                                                                <SidebarMenuSubButton
                                                                    asChild
                                                                >
                                                                    <a
                                                                        href={
                                                                            subItem.url
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        ),
                                                    )}
                                                </SidebarMenuSub>
                                            </div>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                            {data.tarifB.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.title}
                                        >
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </div>
                    <div>
                        <SidebarGroupLabel>Lainnya</SidebarGroupLabel>
                        <SidebarMenu className="space-y-1">
                            {data.more.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.title}
                                        >
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
