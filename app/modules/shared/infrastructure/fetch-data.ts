export const DEBUG_MODE =
  process.env.DEBUG_MODE ?? process.env.NODE_ENV === 'development'
export const API_BASE = process.env.API_BASE ?? 'http://localhost:4000'

export const fetcher = async ({
  url,
  method,
  body,
  headers,
  jsonBody = true,
  contentType = 'application/json',
}: {
  url: string
  method?: string
  body?: any
  headers?: Record<string, string>
  jsonBody?: boolean
  contentType?: string
}): Promise<Response> => {
  let _contentType = jsonBody
    ? 'application/json'
    : 'application/x-www-form-urlencoded'

  if (contentType === 'multipart/form-data') {
    _contentType = 'multipart/form-data'
  }

  const _headers = { ...headers }

  if (contentType === 'multipart/form-data') {
    delete _headers['Content-Type']
  } else {
    _headers['Content-Type'] = _contentType
  }

  const _body =
    contentType === 'multipart/form-data'
      ? body
      : jsonBody
        ? JSON.stringify(body)
        : new URLSearchParams(body)

  const response =
    method === 'GET'
      ? await fetch(url, {
          method,
          headers: _headers,
        })
      : await fetch(url, {
          method,
          body: _body,
          headers: _headers,
        })

  return response
}
