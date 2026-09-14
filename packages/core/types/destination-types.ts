export interface RegionData {
  code: string;
  name: string;
}

export interface RegionSearchResponse {
  [code: string]: string;
}

export interface DestinationSearchParams {
  query: string;
}