// Domain
import { type Response } from '@/app/modules/shared/domain/types'
import { type VehicleObject } from '@/app/modules/vehicle/domain/vehicle'

export interface VehicleRepository {
  getVehicle: (vin: string) => Promise<Response<VehicleObject> | null>
}
