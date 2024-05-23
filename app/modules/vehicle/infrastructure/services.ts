// Application
import { getVehicle } from '@/app/modules/vehicle/application/get/getVehicle'

// Infrastructure
import { ApiVehicleRepository } from '@/app/modules/vehicle/infrastructure/api-vehicle-repository'

const vehicleRepo = new ApiVehicleRepository()

export const getVehicleService = async (vin: string) => {
  return await getVehicle(vehicleRepo)(vin)
}
