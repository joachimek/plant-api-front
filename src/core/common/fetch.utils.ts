import { fetchUtils } from 'react-admin'

const getToken = () => localStorage.getItem('token') as string

const baseHeaders: HeadersInit = {
  'Content-Type': 'application/json',
}

const authHeaders = (token = getToken()): HeadersInit => ({
  ...baseHeaders,
  Authorization: `Bearer ${token}`,
})

const getBase = <T>(url: string, headers: HeadersInit) =>
  fetchUtils
    .fetchJson(url, {
      method: 'GET',
      headers: new Headers(headers),
    })
    .then(({ json }) => json as Promise<T>)

const postBase = <T, K>(url: string, body: T, headers: HeadersInit) =>
  fetchUtils
    .fetchJson(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers(headers),
    })
    .then(({ json }) => json as Promise<K>)

export const get = <T>(baseUrl: string, path?: string) =>
  getBase<T>(`${baseUrl}${path || ''}`, authHeaders())

export const getWithToken = <T>(url: string, token: string) =>
  getBase<T>(url, authHeaders(token))

export const getByConditions = <T>(
  baseUrl: string,
  path: string,
): Promise<T[]> =>
  getBase<T[]>(`${baseUrl}/GetByConditions/${path}`, authHeaders())

export const getWithPagination = <T>(baseUrl: string, path: string) =>
  fetchUtils
    .fetchJson(`${baseUrl}${path}`, {
      method: 'GET',
      headers: new Headers(authHeaders()),
    })
    .then(({ json }) =>
      Promise.resolve({
        data: json as T,
      }),
    )

export const authPost = <T, K>(url: string, body: T) =>
  postBase<T, K>(url, body, baseHeaders)

export const post = <T, K>(url: string, body: T) =>
  postBase<T, K>(url, body, authHeaders())

export const patch = <T, K>(baseUrl: string, body: T) =>
  fetchUtils
    .fetchJson(baseUrl, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: new Headers(authHeaders()),
    })
    .then(({ json }) => json as Promise<K>)

export const put = <T, K>(baseUrl: string, body: T) =>
  fetchUtils
    .fetchJson(baseUrl, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: new Headers(authHeaders()),
    })
    .then(({ json }) => json as Promise<K>)
