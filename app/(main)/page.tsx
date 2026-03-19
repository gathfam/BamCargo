import { BannerCarousel } from "../../components/main/carousel";
import { ReceiptCard } from "../../components/main/receipt/receipt-card";
import { ShippingCalculator } from "@/components/main/cargo/cargo-card";
import FeatureCard from "@/components/main/feature-card";
import CorporateCTA from "../../components/main/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full max-w-7xl mx-auto py-12 px-6 space-y-8">
        <div className="min-h-50 md:min-h-100 w-full">
          <BannerCarousel />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 items-start w-full gap-6">
          <div className="md:col-span-2">
            <ReceiptCard />
          </div>
          <div className="md:col-span-3">
            <ShippingCalculator />
          </div>
        </div>
        <FeatureCard />
        <CorporateCTA />
      </main>
    </div>
  );
}
  