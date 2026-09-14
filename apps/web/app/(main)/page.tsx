import { ShippingCalculator } from "@/components/main/cargo/cargo-card";
import { BannerCarousel } from "@/components/main/carousel/banner-carousel-server";
import CorporateCTA from "@/components/main/corporate-cta";
import FeatureCard from "@/components/main/feature-card";
import { ReceiptCard } from "@/components/main/receipt/receipt-card";
import { HeroSection } from "./../../components/main/hero-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <main className="w-full max-w-7xl mx-auto px-6 space-y-8 pb-12">
        <div
          id="tracking"
          className="grid grid-cols-1 md:grid-cols-5 items-start
                          w-full gap-6 -mt-24 relative z-20"
        >
          <div className="md:col-span-2">
            <ReceiptCard />
          </div>
          <div className="md:col-span-3">
            <ShippingCalculator />
          </div>
        </div>

        <FeatureCard />

        <div className="min-h-50 w-full">
          <BannerCarousel />
        </div>

        <CorporateCTA />
      </main>
    </div>
  );
}
