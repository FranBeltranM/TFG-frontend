import { type DbRepository } from '@/app/modules/db/domain/api-db-repository'

export const getLastDateInserted = (dbRepository: DbRepository) => {
  return async () => {
    return await dbRepository.getLastDateInserted()
  }
}
