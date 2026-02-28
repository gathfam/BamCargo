import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Truck } from "lucide-react";

export function CargoSkeletonCard() {
  return (
    <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-30 rounded-md" />
          <Skeleton className="h-4 w-4 rounded-md" />

          <Skeleton className="h-4 w-30 rounded-md" />
        </div>
      </div>
      <div className="grid gap-4">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded-md" />
                  <Skeleton className="h-6 w-30 rounded-md" />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                  <span className="flex items-center gap-1">
                    <Skeleton className="h-3 w-3 rounded-md" />
                    <Skeleton className="h-3 w-30 rounded-md" />
                  </span>
                  <span className="flex items-center gap-1">
                    <Skeleton className="h-3 w-3 rounded-md" />
                    <Skeleton className="h-3 w-30 rounded-md" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 w-full md:w-auto">
                <Skeleton className="h-8 w-40 rounded-md" />
                <div className="text-xs text-muted-foreground text-right space-y-2 mt-2">
                  <Skeleton className="h-3 w-30 rounded-md" />
                  <Skeleton className="h-3 w-30 rounded-md" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
