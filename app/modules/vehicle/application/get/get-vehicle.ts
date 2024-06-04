// Domain
import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

export const getVehicle = (vehicleRepository: VehicleRepository) => {
  return async (vin: string) => {
    return await vehicleRepository.getVehicle(vin)
  }
}
