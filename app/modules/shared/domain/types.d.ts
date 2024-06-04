export type ResponseType<T> =
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
