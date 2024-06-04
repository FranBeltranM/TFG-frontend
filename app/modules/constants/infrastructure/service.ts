import { getProvincesCode } from '@/app/modules/constants/application/get-provinces-code'
import { ApiConstantsRepository } from '@/app/modules/constants/infrastructure/api-constants-repository'

const repository = new ApiConstantsRepository()

export const getProvincesCodeService = async () => {
  return await getProvincesCode(repository)()
}
