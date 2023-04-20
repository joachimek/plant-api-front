import {
  CreateParams,
  CreateResult,
  DataProvider,
  GetListResult,
  GetManyParams,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  Identifier,
} from 'react-admin'
import { SPECIES_URL } from '../api-urls'
import { get, post } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { SpeciesDto } from '../dto/species/SpeciesDto'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<SpeciesDto>> => {
    /*
    const filterParams = `o=>${filterParamsComposer('o', filter, filterMapper)}`
    const pathParams = queryParamsComposer(sort, pagination, mapSortEventParam)
    const path = `/${filterParams}?${pathParams ?? pathParams}`
    */

    const data = await get<SpeciesDto[]>(`${SPECIES_URL}`, '')

    return Promise.resolve({
      data,
      total: data.length,
    })
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<SpeciesDto>> => {
    const record = await get<SpeciesDto>(SPECIES_URL, `/${id}`)

    return {
      data: record,
    }
  },
  create: async (
    resource: string,
    { data }: CreateParams<CreateRecordRequest>,
  ): Promise<CreateResult<SpeciesDto>> => {
    const created = await post<CreateRecordRequest, SpeciesDto>(SPECIES_URL, {
      ...data,
    })

    return {
      data: created,
    }
  },
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<SpeciesDto>> => {
    console.log(ids)

    const species = await post<{ ids: Identifier[] }, SpeciesDto[]>(
      `${SPECIES_URL}/GetMany`,
      {
        ids,
      },
    )

    return Promise.resolve({ data: species })
  },
} as DataProvider

interface CreateRecordRequest {
  readonly name: string
  readonly info?: string
  readonly isPublic: boolean
}

export default provider
