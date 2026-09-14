import type { ApiResponse } from "./api";

export interface ReceiptDetail {
  number: string;
  reference_no: string;
  service: string;
  pickup_time: string;
  origin: string;
  destination: string;
  consignor: string;
  consignee: string;
  pcs_count: string;
  items_count: string;
  weight: string;
  last_update: string;
  status: string;
  recipient: string;
  is_delivered: boolean;
  progress: ReceiptProgress[];
}

export interface ReceiptProgress {
  id?: number;
  stop: string;
  time: string;
  status: string;
  notes: string | null;
  handler: string;
  status_code: string;
}

export type ReceiptResponse = ApiResponse<ReceiptDetail>;