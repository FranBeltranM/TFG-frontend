// Domain
import { type ResponseType } from '@/app/modules/shared/domain/types'
import {
  type VehicleFilteredByProvinceObject,
  type VehicleObject,
} from '@/app/modules/vehicle/domain/vehicle'

export interface VehicleRepository {
  getVehicle: (vin: string) => Promise<ResponseType<VehicleObject> | null>
  getVehiclesFilteredByProvince: ({
    province,
    skip,
    limit,
  }: {
    province: string
    skip: number
    limit: number
  }) => Promise<ResponseType<VehicleFilteredByProvinceObject> | null>

  getVehiclesFilteredByRegisteredDates: ({
    dateFrom,
    dateTo,
    skip,
    limit,
  }: {
    dateFrom: string
    dateTo: string
    skip: number
    limit: number
  }) => Promise<ResponseType<VehicleFilteredByProvinceObject> | null>
}
