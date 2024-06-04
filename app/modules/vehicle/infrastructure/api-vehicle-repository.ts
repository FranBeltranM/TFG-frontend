import { type ResponseType } from '@/app/modules/shared/domain/types'
import {
  API_BASE,
  fetcher,
} from '@/app/modules/shared/infrastructure/fetch-data'
import {
  type VehicleFilteredByProvinceObject,
  type VehicleObject,
} from '@/app/modules/vehicle/domain/vehicle'
import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

const API_URLS = Object.freeze({
  vehicle: (vin: string) => `${API_BASE}/vehicle-resolved?vin=${vin}`,
  vehicleFilteredByProvince: ({
    province,
    skip,
    limit,
  }: {
    province: string
    skip: number
    limit: number
  }) =>
    `${API_BASE}/vehicle-registered-in-province?province=${province}&skip=${skip}&limit=${limit}`,
})

export class ApiVehicleRepository implements VehicleRepository {
  getVehicle = async (
    vin: string,
  ): Promise<ResponseType<VehicleObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicle(vin),
        method: 'GET',
        jsonBody: true,
      })

      if (!response.ok) {
        throw new Error('Error fetching vehicle')
      }

      const data = (await response.json()) as ResponseType<VehicleObject>

      if (!data.success) {
        throw new Error(data.message)
      }

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  getVehiclesFilteredByProvince = async ({
    province,
    skip,
    limit,
  }: {
    province: string
    skip: number
    limit: number
  }): Promise<ResponseType<VehicleFilteredByProvinceObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicleFilteredByProvince({
          province,
          skip,
          limit,
        }),
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Error fetching vehicles')
      }

      const data =
        (await response.json()) as ResponseType<VehicleFilteredByProvinceObject>

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
