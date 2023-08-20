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
import { GUIDES_URL } from '../api-urls'
import { get, post } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { GuideDto } from '../dto/guides/GuideDto'
import { DataProviderExtensionResult } from '../common/data-provider'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<GuideDto>> => {
    /*
    const filterParams = `o=>${filterParamsComposer('o', filter, filterMapper)}`
    const pathParams = queryParamsComposer(sort, pagination, mapSortEventParam)
    const path = `/${filterParams}?${pathParams ?? pathParams}`
    */

    const data = await get<GuideDto[]>(`${GUIDES_URL}`, '')

    return Promise.resolve({
      data,
      total: data.length,
    })
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<GuideDto>> => {
    const record = await get<GuideDto>(GUIDES_URL, `/${id}`)

    return {
      data: record,
    }
  },
  getByPlantId: async (
    resource: string,
    { id }: GetByPlantIdParams,
  ): Promise<DataProviderExtensionResult<GuideDto[]>> => {
    const guide = await get<GuideDto[]>(
      `${GUIDES_URL}/GetByPlantId/`,
      id.toString(),
    )
    return {
      data: guide,
    }
  },
  create: async (
    resource: string,
    { data }: CreateParams<CreateRecordRequest>,
  ): Promise<CreateResult<GuideDto>> => {
    const created = await post<CreateRecordRequest, GuideDto>(GUIDES_URL, {
      ...data,
      speciesID: data?.speciesID ?? -1,
    })

    return {
      data: created,
    }
  },
  
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<GuideDto>> => {
    const data = await get<GuideDto[]>(GUIDES_URL, `/GetMany/${ids.join(',')}`)

    return Promise.resolve({ data })
  },
} as GuidesDataProvider

interface GuidesDataProvider extends DataProvider {
  getByPlantId: (
    resource: string,
    params: GetByPlantIdParams,
  ) => Promise<DataProviderExtensionResult<GuideDto[]>>,
}

interface CreateRecordRequest {
  readonly speciesID?: number
  readonly info?: string
  readonly maxHumidity: number
  readonly minHumidity: number
}

export interface GetByPlantIdParams {
  id: Identifier
}

export default provider
