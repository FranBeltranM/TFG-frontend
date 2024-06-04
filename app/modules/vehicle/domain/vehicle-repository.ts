// Domain
import { type ResponseType } from '@/app/modules/shared/domain/types'
import {
  type VehicleFilteredByProvinceObject,
  type VehicleFilteredByStolenSeizedObject,
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

  getStolenVehicles: ({
    skip,
    limit,
  }: {
    skip: number
    limit: number
  }) => Promise<ResponseType<VehicleFilteredByStolenSeizedObject> | null>

  getSeizedVehicles: ({
    skip,
    limit,
  }: {
    skip: number
    limit: number
  }) => Promise<ResponseType<VehicleFilteredByStolenSeizedObject> | null>
}
