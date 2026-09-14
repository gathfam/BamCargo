"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@bamcargo/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import type { PublicBanner } from "@bamcargo/core/types/banner-types";

interface BannerCarouselClientProps {
  banners: PublicBanner[];
}

export function BannerCarouselClient({ banners }: BannerCarouselClientProps) {
  if (banners.length === 0) {
    return null;
  }

  return (
    <section className="w-full space-y-4">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full relative group"
      >
        <CarouselContent className="-ml-4">
          {banners.map((banner, index) => {
            const baseUrl =
              process.env.NEXT_PUBLIC_WEB_URL || "https://bamcargo.co.id";
            const imageUrl = banner.src?.startsWith("http")
              ? banner.src
              : `${baseUrl}${banner.src}`;
            console.log(imageUrl);
            const slide = (
              <div
                className="relative aspect-[16/9] w-full
                           overflow-hidden rounded-2xl
                           shadow-sm hover:shadow-md
                           transition-shadow duration-300
                           cursor-pointer
                           bg-orange-vivid"
              >
                {banner.isPortrait ? (
                  <>
                    <Image
                      src={imageUrl}
                      alt=""
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 42vw"
                      className="object-cover blur-2xl scale-125 opacity-60"
                      aria-hidden="true"
                      fill
                    />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div
                        className="relative h-full"
                        style={{
                          aspectRatio: `${banner.width} / ${banner.height}`,
                        }}
                      >
                        <Image
                          src={imageUrl}
                          alt={banner.alt}
                          fill
                          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 35vw"
                          priority={index === 0}
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={imageUrl}
                    alt={banner.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 42vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
            );

            return (
              <CarouselItem
                key={`${banner.src}-${index}`}
                className="pl-4 basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-[42%]"
              >
                {banner.link ? (
                  <Link
                    href={banner.link}
                    target={
                      banner.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      banner.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={banner.title || banner.alt}
                  >
                    {slide}
                  </Link>
                ) : (
                  slide
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
                     h-10 w-10 md:h-12 md:w-12
                     bg-white/95 hover:bg-white
                     border-0 shadow-lg opacity-100
                     transition-opacity duration-300 z-10"
        />
        <CarouselNext
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
                     h-10 w-10 md:h-12 md:w-12
                     bg-white/95 hover:bg-white
                     border-0 shadow-lg opacity-100
                     transition-opacity duration-300 z-10"
        />
      </Carousel>
    </section>
  );
}
