import { type VehicleRepository } from '@/app/modules/vehicle/domain/vehicle-repository'

export const getVehiclesFilteredByRegisteredDates =
  (vehicleRepository: VehicleRepository) =>
  async ({
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
    return await vehicleRepository.getVehiclesFilteredByRegisteredDates({
      dateFrom,
      dateTo,
      skip,
      limit,
    })
  }
