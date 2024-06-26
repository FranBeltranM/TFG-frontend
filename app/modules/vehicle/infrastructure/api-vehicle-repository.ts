// Domain
import { type ResponseType } from '@/app/modules/shared/domain/types'
import {
  type VehicleFilteredByProvinceObject,
  type VehicleFilteredByStolenSeizedObject,
  type VehicleObject,
} from '@/app/modules/vehicle/domain/vehicle'
import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

// Infrastructure
import {
  API_BASE,
  fetcher,
} from '@/app/modules/shared/infrastructure/fetch-data'

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
  vehicleFilteredByRegisteredDates: ({
    dateFrom,
    dateTo,
    skip,
    limit,
  }: {
    dateFrom: string
    dateTo: string
    skip: number
    limit: number
  }) =>
    `${API_BASE}/vehicles-registered-between-dates?startDate=${dateFrom}&endDate=${dateTo}&skip=${skip}&limit=${limit}`,
  vehicleStolen: ({ skip, limit }: { skip: number; limit: number }) =>
    `${API_BASE}/vehicles-stolen?skip=${skip}&limit=${limit}`,
  vehicleSeized: ({ skip, limit }: { skip: number; limit: number }) =>
    `${API_BASE}/vehicles-seized?skip=${skip}&limit=${limit}`,
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

  getVehiclesFilteredByRegisteredDates = async ({
    dateFrom,
    dateTo,
    skip,
    limit,
  }: {
    dateFrom: string
    dateTo: string
    skip: number
    limit: number
  }): Promise<ResponseType<VehicleFilteredByProvinceObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicleFilteredByRegisteredDates({
          dateFrom,
          dateTo,
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

  getStolenVehicles = async ({
    skip,
    limit,
  }: {
    skip: number
    limit: number
  }): Promise<ResponseType<VehicleFilteredByStolenSeizedObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicleStolen({ skip, limit }),
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Error fetching vehicles')
      }

      const data =
        (await response.json()) as ResponseType<VehicleFilteredByStolenSeizedObject>

      if (!data.success) {
        throw new Error(data.message)
      }

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  getSeizedVehicles = async ({
    skip,
    limit,
  }: {
    skip: number
    limit: number
  }): Promise<ResponseType<VehicleFilteredByStolenSeizedObject> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.vehicleSeized({ skip, limit }),
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Error fetching vehicles')
      }

      const data =
        (await response.json()) as ResponseType<VehicleFilteredByStolenSeizedObject>

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
