import { apiClient } from "../lib/api-client";
import { API_ENDPOINTS } from "../config/endpoints";
import type { ReceiptResponse } from "../types/receipts-types";

export const ReceiptService = {
  getByNumber(receiptNumber: string): Promise<ReceiptResponse> {
    return apiClient.get<ReceiptResponse>(
      API_ENDPOINTS.receipts.detail(receiptNumber)
    );
  },
};