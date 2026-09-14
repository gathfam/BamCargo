"use client";

import { ReceiptDetail } from "@bamcargo/core";
import { Card, CardContent, CardHeader, CardTitle } from "@bamcargo/ui/card";
import {
  Package,
  MapPin,
  User,
  Weight,
  Calendar,
  Clock,
  FileText,
  Warehouse,
  Truck,
  Home,
} from "lucide-react";
import { memo, useMemo } from "react";

const STAGES = [
  { key: "entry", label: "Data Entry", icon: FileText },
  { key: "warehouse", label: "Warehouse", icon: Warehouse },
  { key: "delivery", label: "On Delivery", icon: Truck },
  { key: "received", label: "Diterima", icon: Home },
];

export const ReceiptDetailCard = memo(function ReceiptDetailCard({
  data,
}: {
  data: ReceiptDetail;
}) {
  if (data.status === "Invoice Ready") {
    return (
      <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-500">
        Detail resi tidak ditemukan.
      </p>
    );
  }

  const steps = useMemo(
    () =>
      Object.values(data.progress || {})
        .slice()
        .reverse(),
    [data.progress],
  );

  // Hitung stage aktif berdasarkan status terbaru (sederhana)
  const latest = steps[0]?.status?.toLowerCase() || "";
  const activeIndex = latest.includes("received")
    ? 3
    : latest.includes("delivery")
      ? 2
      : latest.includes("warehouse") || latest.includes("manifested")
        ? 1
        : 0;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase text-muted-foreground">
                Nomor Resi
              </p>
              <CardTitle className="font-mono text-2xl">
                {data.number}
              </CardTitle>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-blue-700">
              {data.status}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">

          {/* INFO + ROUTE */}
          <div className="grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
            <Info icon={Package} label="Layanan" value={data.service} />
            <Info icon={Weight} label="Berat" value={data.weight} />
            <Info
              icon={Calendar}
              label="Penjemputan"
              value={data.pickup_time}
            />
            <Info icon={User} label="Penerima" value={data.recipient || "-"} />
          </div>

          <div className="grid gap-4 border-t pt-6 sm:grid-cols-2">
            <div>
              <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-blue-600">
                <MapPin className="h-3 w-3" /> Asal
              </p>
              <p className="font-semibold">{data.consignor}</p>
              <p className="text-sm text-muted-foreground">{data.origin}</p>
            </div>
            <div className="sm:text-right">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-orange-600 sm:justify-end">
                <MapPin className="h-3 w-3" /> Tujuan
              </p>
              <p className="font-semibold">{data.consignee}</p>
              <p className="text-sm text-muted-foreground">
                {data.destination}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DETAIL HISTORY (collapsible feel) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4" />
            Detail Riwayat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y">
            {steps.map((s, i) => (
              <li key={i} className="flex items-center gap-3 py-3">
                <div
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    i === 0
                      ? "bg-blue-500 ring-4 ring-blue-100"
                      : "bg-muted-foreground/30"
                  }`}
                />
                <div className="flex-1">
                  <p
                    className={`text-sm ${i === 0 ? "font-bold text-blue-600" : "font-medium"}`}
                  >
                    {s.status}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.stop}</p>
                </div>
                <time className="text-xs text-muted-foreground">{s.time}</time>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
});

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </p>
      <p className="mt-0.5 truncate text-sm font-semibold">{value}</p>
    </div>
  );
}
