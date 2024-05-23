export type Response<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      message: string
    }

export interface SearchParams {
  vin: string
}
