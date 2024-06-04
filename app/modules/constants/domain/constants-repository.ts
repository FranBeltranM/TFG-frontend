import { type Province } from '@/app/modules/constants/domain/constants'
import { type ResponseType } from '@/app/modules/shared/domain/types'

export interface ConstantsRepository {
  getProvinces: () => Promise<ResponseType<Province[]> | null>
}
