import type { ShippingCost } from "@bamcargo/core";
import { Clock, Truck } from "lucide-react";

export default function CostRow({ cost }: { cost: ShippingCost }) {
  return (
    <tr className="hover:bg-accent/50 transition-colors">
      <td className="px-4 py-3 font-semibold text-primary">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4" />
          {cost.service}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-muted-foreground" />
          {cost.etd} Hari
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-muted-foreground space-y-0.5">
        <div>Min: {cost.min_weight} kg</div>
        <div>Rate: {cost.display_base_rate}/kg</div>
        <div>Charged: {cost.charged_weight} kg</div>
      </td>
      <td className="px-4 py-3 text-right font-bold text-base text-primary">
        {cost.display_cost}
      </td>
    </tr>
  );
}