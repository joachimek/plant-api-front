import { PaginationPayload } from 'ra-core'
import { SortPayload } from './get-list.params'

export const filterParamsComposer = (
  lambdaParameter: string,
  filterValues: any,
  filterMapper: (
    key: string,
  ) => (lambdaParameter: string, value: any, otherValues: any) => string,
): string => {
  if (Object.keys(filterValues).length) {
    const filterParams = Object.entries(filterValues)
      .map(([key, value]) => {
        const mapper = filterMapper(key)
        return mapper(lambdaParameter, value as string, filterValues)
      })
      .filter((val) => val != null)
    if (filterParams.length) {
      return filterParams.reduce((p, c) => `${p}&&${c}`)
    }
  }
  return 'true'
}

export const queryParamsComposer = (
  sort?: SortPayload,
  pagination?: PaginationPayload | undefined,
  sortMapper?: (key: string) => string,
): string | null => {
  const queryParams: string[] = []
  if (sort && sortMapper) {
    const { field, order } = sort
    queryParams.push(`sortBy=${sortMapper(field)}`)
    queryParams.push(`sortOrder=${order}`)
  }
  if (pagination) {
    const { page, perPage } = pagination
    queryParams.push(`rangeFrom=${page * perPage - perPage}`)
    queryParams.push(`rangeTo=${page * perPage - 1}`)
  }
  return queryParams.length > 0
    ? queryParams.reduce((p, c) => `${p}&${c}`)
    : null
}
