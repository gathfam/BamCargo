import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, MapPin, Package, User, Weight } from "lucide-react";

export function ReceiptSkeletonCard() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-mono">
                <Skeleton className="h-8 w-60 rounded-md" />
              </CardTitle>
            </div>
            <div
              className={`px-4 py-1 rounded-full text-sm font-bold uppercase
              }`}
            >
              <Skeleton className="h-6 w-24 rounded-md" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md" />

              <div className="text-sm">
                <Skeleton className="h-6 w-12 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md" />

              <div className="text-sm">
                <Skeleton className="h-6 w-12 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md" />

              <div className="text-sm">
                <Skeleton className="h-6 w-12 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md" />
              <div className="text-sm">
                <Skeleton className="h-6 w-12 rounded-md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-fit">
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-6 w-24 rounded-md mb-2" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 rounded-md mb-2" />
              <Skeleton className="h-3 w-26 rounded-md" />
            </div>
          </CardContent>
        </Card>
        <Card className="h-fit">
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-orange-600">
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-6 w-24 rounded-md mb-2" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 rounded-md mb-2" />
              <Skeleton className="h-3 w-26 rounded-md" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-6 w-32 rounded-md mb-2" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-0">
            {Array.from({ length: 1 }).map((step, index) => (
              <div key={index} className="flex gap-4 group">
                {/* Garis Timeline Hidden */}
                <div className="flex flex-col items-center opacity-0">
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
                  {index !== 1 && (
                    <div className="w-0.5 h-full bg-muted group-hover:bg-blue-200 transition-colors" />
                  )}
                </div>

                <div className="pb-8 flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                    <Skeleton className="h-6 w-32 rounded-md mb-2" />
                    <Skeleton className="h-4 w-24 rounded-md" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Skeleton className="h-3 w-32 rounded-md mb-2" />
                  </p>
                  <Skeleton className="h-3 w-32 rounded-md mb-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
