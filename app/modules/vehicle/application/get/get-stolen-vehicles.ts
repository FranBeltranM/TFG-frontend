import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

export const getStolenVehicles =
  (vehicleRepository: VehicleRepository) =>
  async ({ skip, limit }: { skip: number; limit: number }) => {
    return vehicleRepository.getStolenVehicles({ skip, limit })
  }
