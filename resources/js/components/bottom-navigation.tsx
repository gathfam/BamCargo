    'use client';

import * as React from 'react';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from '@inertiajs/react';

export function BottomNavigation() {
    const data = [
        { title: 'Cek Resi', url: '#cek-resi', icon: '' },
        { title: 'Cek Ongkir', url: '#cek-ongkir', icon: '' },
        { title: 'Hubungi Kami', url: '#cek-ongkir', icon: '' },
    ];
    return (
        <NavigationMenu viewport={false} className='fixed flex bottom-0 p-4 bg-white shadow-2xl outline-1 outline-slate-300 min-w-full'>
            <NavigationMenuList>
                {data.map((item) => {
                    return (
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href={item.url}>{item.title}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
