// Application
import { getLastDateInserted } from '@/app/modules/db/application/get/get-last-date-inserted'

// Infrastructure
import { ApiDbRepository } from '@/app/modules/db/infrastructure/api-db-repository'

const dbRepository = new ApiDbRepository()

export const getLastDateInsertedService = async () => {
  return await getLastDateInserted(dbRepository)()
}
