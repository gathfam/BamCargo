import Image from "next/image";
import { BannerCarousel } from "./../components/home/carousel";
import { ReceiptCard } from "../components/home/receipt/receipt-card";
import { ShippingCalculator } from "@/components/home/cargo/cargo-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotorCard } from "@/components/home/motor/motor-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Globe, Motorbike, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/home/feature-card";
import CorporateCTA from "./../components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full max-w-7xl mx-auto py-6 px-6 space-y-8">
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
