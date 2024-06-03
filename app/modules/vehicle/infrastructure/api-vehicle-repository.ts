import { type Response } from '@/app/modules/shared/domain/types'
import {
  API_BASE,
  fetcher,
} from '@/app/modules/shared/infrastructure/fetch-data'
import { type VehicleObject } from '@/app/modules/vehicle/domain/vehicle'
import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

const API_URLS = Object.freeze({
  vehicle: (vin: string) => `${API_BASE}/vehicle-resolved?vin=${vin}`,
})

export class ApiVehicleRepository implements VehicleRepository {
  getVehicle = async (vin: string): Promise<Response<VehicleObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicle(vin),
        method: 'GET',
        jsonBody: true,
      })

      if (!response.ok) {
        throw new Error('Error fetching vehicle')
      }

      const data = (await response.json()) as Response<VehicleObject>

      if (!data.success) {
        throw new Error(data.message)
      }

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
