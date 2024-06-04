// Domain
import { type Province } from '@/app/modules/constants/domain/constants'
import { type ConstantsRepository } from '@/app/modules/constants/domain/constants-repository'
import { type ResponseType } from '@/app/modules/shared/domain/types'

// Infrastructure
import {
  API_BASE,
  fetcher,
} from '@/app/modules/shared/infrastructure/fetch-data'

const API_URLS = Object.freeze({
  provinces: `${API_BASE}/constants/get-province-code`,
})

export class ApiConstantsRepository implements ConstantsRepository {
  getProvinces = async (): Promise<ResponseType<Province[]> | null> => {
    try {
      const response = await fetcher({
        url: API_URLS.provinces,
        method: 'GET',
        jsonBody: true,
      })

      if (!response.ok) {
        throw new Error('Error fetching provinces')
      }

      const data = (await response.json()) as ResponseType<Province[]>

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
