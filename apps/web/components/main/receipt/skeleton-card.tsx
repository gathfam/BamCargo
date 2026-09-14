"use client";

import { Card, CardContent, CardHeader } from "@bamcargo/ui/card";
import { Skeleton } from "@bamcargo/ui/skeleton";
import { Clock } from "lucide-react";

export function ReceiptSkeletonCard() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      {/* ─── Main Card ──────────────────────────────────── */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-2">
              {/* "Nomor Resi" label */}
              <Skeleton className="h-3 w-20" />
              {/* Receipt number */}
              <Skeleton className="h-7 w-44" />
            </div>
            {/* Status badge */}
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* ─── INFO Grid ─── */}
          <div className="grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-1">
                  <Skeleton className="h-3 w-3 rounded-sm" />
                  <Skeleton className="h-2.5 w-16" />
                </div>
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>

          {/* ─── ROUTE Asal/Tujuan ─── */}
          <div className="grid gap-4 border-t pt-6 sm:grid-cols-2">
            {/* Asal */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-3 w-3 rounded-sm" />
                <Skeleton className="h-2.5 w-12" />
              </div>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-3.5 w-1/2" />
            </div>

            {/* Tujuan */}
            <div className="space-y-1.5 sm:flex sm:flex-col sm:items-end">
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-3 w-3 rounded-sm" />
                <Skeleton className="h-2.5 w-14" />
              </div>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-3.5 w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ─── History Card ──────────────────────────────── */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground/40" />
            <Skeleton className="h-5 w-32" />
          </div>
        </CardHeader>
        <CardContent>
          <ul className="divide-y">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="flex items-center gap-3 py-3">
                {/* Dot indicator */}
                <Skeleton
                  className={`shrink-0 rounded-full ${
                    i === 0 ? "h-2 w-2 ring-4 ring-muted/40" : "h-2 w-2"
                  }`}
                />
                {/* Status + stop */}
                <div className="flex-1 space-y-1.5">
                  <Skeleton className={`h-3.5 ${i === 0 ? "w-48" : "w-40"}`} />
                  <Skeleton className="h-3 w-32" />
                </div>
                {/* Time */}
                <Skeleton className="h-3 w-20" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}