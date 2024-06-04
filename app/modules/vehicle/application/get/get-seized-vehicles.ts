import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

export const getSeizedVehicles =
  (vehicleRepository: VehicleRepository) =>
  async ({ skip, limit }: { skip: number; limit: number }) => {
    return vehicleRepository.getSeizedVehicles({ skip, limit })
  }
