export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image_url: string;
  created_at: string;
  author_id: number;
  status: string;
}

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
  progress: Progress[];
}

export interface Progress {
  stop: string;
  time: string;
  status: string;
  notes: null;
  handler: string;
  status_code: string;
  id?: number;
}

export interface RegionData {
  [code: string]: string;
}

export interface Receipt {
  origin_details: NDetails;
  destination_details: NDetails;
  costs: Cost[];
}

export interface Cost {
  city_origin: string;
  district_origin: null;
  city_destination: string;
  district_destination: string;
  service: string;
  service_code: string;
  cost: number;
  display_cost: string;
  base_rate: number;
  display_base_rate: string;
  weight: number;
  volumetric_weight: number;
  charged_weight: number;
  min_weight: number;
  volume: number;
  charged_volume: number;
  min_volume: null;
  etd: string;
  notes: null;
}

export interface NDetails {
  id: string;
  type: string;
  name: string;
}
