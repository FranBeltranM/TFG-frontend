// Application
import { getVehiclesFilteredByRegisteredDates } from '@/app/modules/vehicle/application/get/get-vehicle-filtered-by-registered-dates'
import { getVehicle } from '@/app/modules/vehicle/application/get/getVehicle'

// Infrastructure
import { getVehiclesFilteredByProvince } from '@/app/modules/vehicle/application/get/getVehiclesFilteredByProvince'
import { ApiVehicleRepository } from '@/app/modules/vehicle/infrastructure/api-vehicle-repository'

const vehicleRepo = new ApiVehicleRepository()

export const getVehicleService = async (vin: string) => {
  return await getVehicle(vehicleRepo)(vin)
}

export const getVehiclesFilteredByProvinceService = async ({
  province,
  skip,
  limit,
}: {
  province: string
  skip: number
  limit: number
}) => {
  return await getVehiclesFilteredByProvince(vehicleRepo)({
    province,
    skip,
    limit,
  })
}

export const getVehiclesFilteredByRegisteredDatesService = async ({
  dateFrom,
  dateTo,
  skip,
  limit,
}: {
  dateFrom: string
  dateTo: string
  skip: number
  limit: number
}) => {
  return await getVehiclesFilteredByRegisteredDates(vehicleRepo)({
    dateFrom,
    dateTo,
    skip,
    limit,
  })
}
