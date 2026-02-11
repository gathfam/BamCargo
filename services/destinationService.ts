import { RegionData } from '@/types/api'

export const DestinationService = {
  async getOrigin(q: string): Promise<RegionData> {
    const res = await fetch(`/api/destinations?query=${q}`)
    
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message || 'Gagal mengambil data resi')
    } 
    
    return res.json()
  }
}