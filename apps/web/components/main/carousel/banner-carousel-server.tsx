import { BannerService } from "@bamcargo/core";
import type { PublicBanner } from "@bamcargo/core/types/banner-types";
import { BannerCarouselClient } from "./banner-carousel-client";

export async function BannerCarousel() {
  let banners: PublicBanner[] = [];

  try {
    console.log("[BannerCarousel] Fetching...");
    console.log(
      "[BannerCarousel] NEXT_PUBLIC_APP_URL =",
      process.env.NEXT_PUBLIC_APP_URL
    );

    const res = await BannerService.listPublic();
    console.log("[BannerCarousel] Response:", JSON.stringify(res));

    banners = res.data;
  } catch (error) {
    console.error("[BannerCarousel] Failed to load banners:", error);
  }

  return <BannerCarouselClient banners={banners} />;
}