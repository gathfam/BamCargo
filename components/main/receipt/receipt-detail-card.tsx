"use client";

import { ReceiptDetail } from "@/types/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  MapPin,
  User,
  Weight,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { memo } from "react";

export const ReceiptDetailCard = memo(({ data }: { data: ReceiptDetail }) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <Card
        className={`border-t-4 ${data.is_delivered ? "border-t-green-500" : "border-t-blue-500"}`}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardDescription>Nomor Resi</CardDescription>
              <CardTitle className="text-2xl font-mono">
                {data.number}
              </CardTitle>
            </div>
            <div
              className={`px-4 py-1 rounded-full text-sm font-bold uppercase ${
                data.is_delivered
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {data.status}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-muted-foreground" />
              <div className="text-sm">
                <p className="text-muted-foreground text-xs">Layanan</p>
                <p className="font-medium">{data.service}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Weight className="w-4 h-4 text-muted-foreground" />
              <div className="text-sm">
                <p className="text-muted-foreground text-xs">Berat</p>
                <p className="font-medium">{data.weight}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div className="text-sm">
                <p className="text-muted-foreground text-xs">Penjemputan</p>
                <p className="font-medium">{data.pickup_time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <div className="text-sm">
                <p className="text-muted-foreground text-xs">Penerima</p>
                <p className="font-medium truncate">{data.recipient || "-"}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-fit">
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <h4 className="font-bold">Asal</h4>
            </div>
            <div>
              <p className="font-semibold">{data.consignor}</p>
              <p className="text-sm text-muted-foreground">{data.origin}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="h-fit">
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-orange-600">
              <MapPin className="w-5 h-5" />
              <h4 className="font-bold">Tujuan</h4>
            </div>
            <div>
              <p className="font-semibold">{data.consignee}</p>
              <p className="text-sm text-muted-foreground">
                {data.destination}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Riwayat Pengiriman
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-0">
            {Object.values(data.progress || {}).map((step, index) => (
              <div key={index} className="flex gap-4 group">
                {/* Garis Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className={`z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 bg-background ${
                      index === 0 ? "border-blue-500" : "border-muted"
                    }`}
                  >
                    {index === 0 ? (
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-muted" />
                    )}
                  </div>
                  {index !== data.progress.length - 1 && (
                    <div className="w-0.5 h-full bg-muted group-hover:bg-blue-200 transition-colors" />
                  )}
                </div>

                <div className="pb-8 flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                    <p
                      className={`font-bold ${index === 0 ? "text-blue-600" : "text-foreground"}`}
                    >
                      {step.status}
                    </p>
                    <time className="text-xs text-muted-foreground whitespace-nowrap">
                      {step.time}
                    </time>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Posisi:{" "}
                    <span className="text-foreground font-medium">
                      {step.stop}
                    </span>
                  </p>
                  {step.handler && (
                    <p className="text-xs text-muted-foreground mt-1 italic">
                      Handler: {step.handler}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
