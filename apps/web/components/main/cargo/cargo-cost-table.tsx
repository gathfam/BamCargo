import type { ShippingCost } from "@bamcargo/core";
import CostRow from "./cargo-cost-row";

interface CostTableProps {
  costs: ShippingCost[];
}

export default function CostTable({ costs }: CostTableProps) {
  return (
    <div className="overflow-x-auto border rounded-lg w-full">
      <table className="w-full text-sm text-left whitespace-nowrap bg-card">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Layanan</th>
            <th className="px-4 py-3 font-medium">Estimasi</th>
            <th className="px-4 py-3 font-medium">Ketentuan</th>
            <th className="px-4 py-3 font-medium text-right">Total Biaya</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {costs.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-8 text-muted-foreground">
                Tidak ada layanan tersedia untuk rute ini.
              </td>
            </tr>
          ) : (
            costs.map((cost, idx) => (
              <CostRow key={`${cost.service}-${idx}`} cost={cost} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}