import { ArrowRight } from "lucide-react";

export default function RouteHeader({
  origin,
  destination,
}: {
  origin:      string;
  destination: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm 
                    text-muted-foreground bg-muted/50 
                    p-3 rounded-lg border">
      <span className="font-medium text-foreground">{origin}</span>
      <ArrowRight className="h-4 w-4" />
      <span className="font-medium text-foreground">{destination}</span>
    </div>
  );
}
