import { Receipt, NDetails, Cost, ApiResponse } from "./../types/api";

// Interface untuk payload sesuai data yang kamu berikan
export interface CostVolumePayload {
  weight: string;
  height: string;
  width: string;
  length: string;
  orig_id: string | null;
  dest_id: string | null;
}
export interface CostMotorPayload {
  mtr_cc: string;
  orig_id: string | null;
  dest_id: string | null;
}

export const OngkirService = {
  async getCostsByVolume(payload: CostVolumePayload): Promise<Receipt> {
    const res = await fetch(`/api/get-costs`, {
      method: "POST",

      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Gagal mengambil data biaya");
    }

    return res.json();
  },
  async getCostsMotor(payload: CostMotorPayload): Promise<Receipt> {
    const res = await fetch(`/api/get_mtr_costs`, {
      method: "POST",

      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Gagal mengambil data biaya");
    }

    return res.json();
  },
};
