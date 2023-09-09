import {
  DataProvider,
  GetListResult,
  GetManyParams,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  Identifier,
} from 'react-admin'
import { PLANTS_HIST_URL } from '../api-urls'
import { DataProviderExtensionResult } from '../common/data-provider'
import { get } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { PlantsHistDto } from '../dto/plants-hists/PlantsHistDto'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<PlantsHistDto>> => {
    /*
    const filterParams = `o=>${filterParamsComposer('o', filter, filterMapper)}`
    const pathParams = queryParamsComposer(sort, pagination, mapSortEventParam)
    const path = `/${filterParams}?${pathParams ?? pathParams}`
    */

    const data = await get<PlantsHistDto[]>(`${PLANTS_HIST_URL}`, '')

    return Promise.resolve({
      data,
      total: data.length,
    })
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<PlantsHistDto>> => {
    const record = await get<PlantsHistDto>(PLANTS_HIST_URL, `/${id}`)

    return {
      data: record,
    }
  },
  getByPlantId: async (
    resource: string,
    { id }: GetByPlantParams,
  ): Promise<PlantsHistDto[]> => {
    const history = await get<PlantsHistDto[]>(
      `${PLANTS_HIST_URL}/GetByPlantId/`,
      id.toString(),
    )
    return history
  },
  getLastByPlantId: async (
    resource: string,
    { id }: GetByPlantParams,
  ): Promise<PlantsHistDto> => {
    const history = await get<PlantsHistDto>(
      `${PLANTS_HIST_URL}/GetLastByPlantId/`,
      id.toString(),
    )
    return history
  },
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<PlantsHistDto>> => {
    const data = await get<PlantsHistDto[]>(
      PLANTS_HIST_URL,
      `/GetMany/${ids.join(',')}`,
    )

    return Promise.resolve({ data })
  },
} as PlantsHistDataProvider

interface PlantsHistDataProvider extends DataProvider {
  getByPlantId: (
    resource: string,
    params: GetByPlantParams,
  ) => Promise<PlantsHistDto[]>
  getLastByPlantId: (
    resource: string,
    params: GetByPlantParams,
  ) => Promise<PlantsHistDto>
}

export interface GetByPlantParams {
  id: Identifier
}

export default provider
