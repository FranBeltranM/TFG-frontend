// Domain
import { type DbRepository } from '@/app/modules/db/domain/api-db-repository'
import { type LastDateInsertedResult } from '@/app/modules/db/domain/db'

// Infrastructure
import {
  API_BASE,
  fetcher,
} from '@/app/modules/shared/infrastructure/fetch-data'

const API_URLS = Object.freeze({
  lastDateInserted: `${API_BASE}/db/last-date-inserted`,
})

export class ApiDbRepository implements DbRepository {
  getLastDateInserted = async () => {
    try {
      const response = await fetcher({
        url: API_URLS.lastDateInserted,
        method: 'GET',
        jsonBody: true,
      })

      if (!response.ok) {
        throw new Error('Error fetching last date inserted')
      }

      const data = (await response.json()) as LastDateInsertedResult

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
