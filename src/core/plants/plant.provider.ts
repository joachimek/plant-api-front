import {
  CreateParams,
  CreateResult,
  DataProvider,
  GetListResult,
  GetOneParams,
  GetOneResult,
} from 'react-admin'
import { PLANTS_URL } from '../api-urls'
import { get, post } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { PlantDto } from '../dto/PlantDto'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<PlantDto>> => {
    /*
    const filterParams = `o=>${filterParamsComposer('o', filter, filterMapper)}`
    const pathParams = queryParamsComposer(sort, pagination, mapSortEventParam)
    const path = `/${filterParams}?${pathParams ?? pathParams}`
    */

    const data = await get<PlantDto[]>(
      `${PLANTS_URL}`,
      '',
    )

    return Promise.resolve({
      data,
      total: data.length,
    })
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<PlantDto>> => {
    const record = await get<PlantDto>(PLANTS_URL, `/${id}`)

    return {
      data: record,
    }
  },
  create: async (
    resource: string,
    { data }: CreateParams<PlantDto>,
  ): Promise<CreateResult<PlantDto>> => {
    const created = await post<CreateRecordRequest, PlantDto>(PLANTS_URL, {
      ...data,
      speciesId: data.speciesId || -1,
      guideId: data.guideId || -1,
      deviceId: data.deviceId || -1,
    })

    return {
      data: created,
    }
  },
} as DataProvider

interface CreateRecordRequest {
  readonly speciesId: number
  readonly guideId: number
  readonly deviceId: number
  readonly name?: string
}

export default provider
