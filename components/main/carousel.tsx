"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}
import Image from "next/image";

export function BannerCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        }),
      ]}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
            <Image
              width={900}
              height={300}
              // priority={index === 0}
              alt={`banner_${index + 1}`}
              src={`/banner/banner_${index + 1}.webp`}
              className="rounded-xl items-center "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
