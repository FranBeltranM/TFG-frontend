import { type LastDateInsertedResult } from '@/app/modules/db/domain/db'

export interface DbRepository {
  getLastDateInserted: () => Promise<LastDateInsertedResult | null>
}
