// Application
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
