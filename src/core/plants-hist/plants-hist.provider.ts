import {
  DataProvider,
  GetListResult,
  GetOneParams,
  GetOneResult,
  Identifier,
} from 'react-admin'
import { PLANTS_HIST_URL, PLANTS_URL } from '../api-urls'
import { DataProviderExtensionResult } from '../common/data-provider'
import { get } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { PlantDto } from '../dto/PlantDto'
import { PlantsHistDto } from '../dto/PlantsHistDto'

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

    const data = await get<PlantsHistDto[]>(
      `${PLANTS_HIST_URL}`,
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
    const record = await get<PlantDto>(PLANTS_HIST_URL, `/${id}`)

    return {
      data: record,
    }
  },
  getByPlant: async (
    resource: string,
    { id }: GetByPlantParams,
  ): Promise<DataProviderExtensionResult<PlantsHistDto[]>> => {
    const history = await get<PlantsHistDto[]>(
      `${PLANTS_HIST_URL}/GetByPlant/`,
      id.toString(),
    )
    return {
      data: history,
    }
  },
} as PlantsHistDataProvider

interface PlantsHistDataProvider extends DataProvider {
  getByPlant: (
    resource: string,
    params: GetByPlantParams,
  ) => Promise<DataProviderExtensionResult<PlantsHistDto[]>>
}

export interface GetByPlantParams {
  id: Identifier
}

export default provider