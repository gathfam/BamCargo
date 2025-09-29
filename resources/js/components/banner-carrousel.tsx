'use client';

import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

export function CarouselBanner() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true }),
    );

    const bannerList = [
        '/storage/assets/images/banner/banner_1.webp',
        '/storage/assets/images/banner/banner_2.webp',
        '/storage/assets/images/banner/banner_3.webp',
        '/storage/assets/images/banner/banner_4.webp',
    ];

    return (
        <div className="w-full rounded-2xl">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full rounded-2xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="rounded-2xl">
                    {bannerList.map((e, index) => (
                        <CarouselItem
                            key={index + 1}
                            className="m-0 flex w-full items-center justify-center rounded-2xl"
                        >
                            <div className="w-full">
                                <img
                                    src={e}
                                    alt={`banner ${index + 1}`}
                                    className="h-auto w-full rounded-2xl object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
