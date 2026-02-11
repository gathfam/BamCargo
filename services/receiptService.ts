import { ApiResponse, ReceiptDetail } from '@/types/api'

export const ReceiptService = {
  async getByNumber(receiptNumber: string): Promise<ApiResponse<ReceiptDetail>> {
    const res = await fetch(`/api/receipts/${receiptNumber}`)
    
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message || 'Gagal mengambil data resi')
    } 
    
    return res.json()
  }
}