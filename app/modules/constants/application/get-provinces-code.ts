import { type ApiConstantsRepository } from '@/app/modules/constants/infrastructure/api-constants-repository'

export const getProvincesCode = (
  apiConstantsRepository: ApiConstantsRepository,
) => {
  return async () => {
    return await apiConstantsRepository.getProvinces()
  }
}
