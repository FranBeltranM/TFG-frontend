// Application
import { getSeizedVehicles } from '@/app/modules/vehicle/application/get/get-seized-vehicles'
import { getStolenVehicles } from '@/app/modules/vehicle/application/get/get-stolen-vehicles'
import { getVehicle } from '@/app/modules/vehicle/application/get/get-vehicle'
import { getVehiclesFilteredByRegisteredDates } from '@/app/modules/vehicle/application/get/get-vehicle-filtered-by-registered-dates'

// Infrastructure
import { getVehiclesFilteredByProvince } from '@/app/modules/vehicle/application/get/get-vehicles-filtered-by-province'
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

export const getStolenVehiclesService = async ({
  skip,
  limit,
}: {
  skip: number
  limit: number
}) => {
  return await getStolenVehicles(vehicleRepo)({ skip, limit })
}

export const getSeizedVehiclesService = async ({
  skip,
  limit,
}: {
  skip: number
  limit: number
}) => {
  return await getSeizedVehicles(vehicleRepo)({ skip, limit })
}
