import Image from "next/image";
import { BannerCarousel } from "./../components/home/carousel";
import { ReceiptCard } from "../components/home/receipt/receipt-card";
import {  ShippingCalculator } from "@/components/home/cargo/cargo-card";
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
    <div className="flex min-h-screen items-center justify-center bfont-sans bg-background">
      <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-8  max-w-400 py-6 px-6  sm:items-start">
        <BannerCarousel />
        <div className="md:grid md:grid-cols-5 items-start w-full md:gap-6 space-y-8 md:space-y-0">
          <div className="col-span-2">
            <ReceiptCard />
          </div>{" "}
          <div className="w-full col-span-3 ">
            <ShippingCalculator />
          </div>
        </div>
        <FeatureCard />
        <CorporateCTA />
      </main>

    </div>
  );
}
