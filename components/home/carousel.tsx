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
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent className="flex flex-row justify-center items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              width="1200"
              height="100"
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
