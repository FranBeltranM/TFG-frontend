import { type ApiVehicleRepository } from '@/app/modules/vehicle/infrastructure/api-vehicle-repository'

export const getVehiclesFilteredByProvince = (
  apiVehicleRepository: ApiVehicleRepository,
) => {
  return async ({
    province,
    skip,
    limit,
  }: {
    province: string
    skip: number
    limit: number
  }) => {
    return await apiVehicleRepository.getVehiclesFilteredByProvince({
      province,
      skip,
      limit,
    })
  }
}
