import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Search,
  Plus,
  Minus,
  Truck,
  PhoneCall,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Data Dummy untuk Hubs
const hubs = [
  {
    city: "Jakarta Hub",
    area: "Greater Metro Area",
    status: "Operational",
    statusColor: "bg-green-100 text-green-700",
    type: "24/7 Operations",
    phone: "+62 21 888 000",
    image: "/images/jakarta-hub.jpg", // Ganti dengan path image asli
  },
  {
    city: "Surabaya Hub",
    area: "East Java Gateway",
    status: "Operational",
    statusColor: "bg-green-100 text-green-700",
    type: "Main Sea Port Link",
    phone: "+62 31 777 999",
    image: "/images/surabaya-hub.jpg",
  },
  {
    city: "Makassar Hub",
    area: "Eastern Indonesia Base",
    status: "Operational",
    statusColor: "bg-green-100 text-green-700",
    type: "Air Cargo Specialist",
    phone: "+62 411 555 444",
    image: "/images/makassar-hub.jpg",
  },
  {
    city: "Medan Hub",
    area: "Sumatera Gateway",
    status: "Peak Load",
    statusColor: "bg-yellow-100 text-yellow-700",
    type: "Cross-Border Logistics",
    phone: "+62 61 222 111",
    image: "/images/medan-hub.jpg",
  },
];

export default function ContactNetwork() {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-6 space-y-12">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Contact & Agent Network
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Connect with our global logistics experts or locate an authorized
          Bamcargo agent near you for seamless shipping solutions.
        </p>
      </div>

      {/* Grid Layout: Contact & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Form */}
        <Card className="lg:col-span-5 border-slate-100 shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#800000]/10 rounded-lg text-[#800000]">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Contact Us</h3>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Full Name
                </label>
                <Input
                  placeholder="John Doe"
                  className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-[#800000]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-[#800000]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your logistics needs..."
                  rows={4}
                  className="bg-slate-50 border-slate-200 focus-visible:ring-[#800000] resize-none"
                />
              </div>
              <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white h-12 font-bold text-lg gap-2">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">
                Office Headquarters
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#800000] mt-0.5" />
                  <p className="text-sm text-slate-600">
                    Jl. Logistics Boulevard No. 88, Central Jakarta, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#800000]" />
                  <p className="text-sm text-slate-600">+62 21 555 1234</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#800000]" />
                  <p className="text-sm text-slate-600">
                    Mon - Sat: 08:00 AM - 06:00 PM
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right: Agent Network & Map */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Search Section */}
          <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Find an Agent</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  className="w-full pl-12 h-14 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-[#800000]"
                  placeholder="Search by city, region, or zip code..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Map Integration */}
          <div className="flex-1 min-h-[500px] bg-slate-200 rounded-xl relative overflow-hidden group shadow-inner">
            {/* Placeholder Map Image - Ganti URL ini dengan map style kamu */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 grayscale"
              style={{
                backgroundImage:
                  "url('https://maps.googleapis.com/maps/api/staticmap?center=Indonesia&zoom=5&size=800x600&sensor=false&key=YOUR_KEY')",
              }}
            ></div>

            {/* Interactive Map Overlay */}
            <div className="absolute inset-0 bg-[#800000]/5 mix-blend-multiply"></div>

            {/* Markers */}
            <MapMarker top="30%" left="20%" label="Medan Agent" />
            <MapMarker top="50%" left="45%" label="Jakarta HQ" size="large" />
            <MapMarker top="65%" left="75%" label="Makassar Hub" />

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="shadow-md bg-white hover:bg-slate-50"
              >
                <Plus className="h-4 w-4 text-slate-700" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="shadow-md bg-white hover:bg-slate-50"
              >
                <Minus className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hubs Section */}
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold">Major Regional Hubs</h3>
            <p className="text-slate-600">
              Strategic distribution centers across the archipelago
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable Hub Cards */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {hubs.map((hub, idx) => (
            <Card
              key={idx}
              className="min-w-[320px] rounded-xl overflow-hidden border-slate-100 hover:shadow-xl transition-shadow flex-shrink-0 snap-center"
            >
              <div className="h-48 bg-slate-200 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                  <Truck className="h-10 w-10 opacity-20" />
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold">{hub.city}</h4>
                    <p className="text-xs text-slate-500 uppercase font-semibold">
                      {hub.area}
                    </p>
                  </div>
                  <span
                    className={`${hub.statusColor} text-[10px] px-2 py-1 rounded-full font-bold`}
                  >
                    {hub.status}
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Truck className="h-4 w-4" />
                    <span>{hub.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <PhoneCall className="h-4 w-4" />
                    <span>{hub.phone}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#800000] text-[#800000] font-bold hover:bg-[#800000] hover:text-white"
                >
                  Contact Hub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component untuk Marker Map biar rapi
function MapMarker({
  top,
  left,
  label,
  size = "normal",
}: {
  top: string;
  left: string;
  label: string;
  size?: "normal" | "large";
}) {
  return (
    <div className="absolute group cursor-pointer" style={{ top, left }}>
      <div className="relative">
        <MapPin
          className={`${
            size === "large" ? "h-12 w-12" : "h-9 w-9"
          } text-[#800000] drop-shadow-md hover:scale-125 transition-transform`}
          fill="currentColor"
        />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </div>
      </div>
    </div>
  );
}
