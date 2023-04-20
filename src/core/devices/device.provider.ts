import {
  CreateParams,
  CreateResult,
  DataProvider,
  GetListResult,
  GetManyParams,
  GetManyResult,
  GetOneParams,
  GetOneResult,
} from 'react-admin'
import { DEVICES_URL } from '../api-urls'
import { get, post } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { DeviceDto } from '../dto/devices/DeviceDto'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<DeviceDto>> => {
    /*
    const filterParams = `o=>${filterParamsComposer('o', filter, filterMapper)}`
    const pathParams = queryParamsComposer(sort, pagination, mapSortEventParam)
    const path = `/${filterParams}?${pathParams ?? pathParams}`
    */

    const data = await get<DeviceDto[]>(`${DEVICES_URL}`, '')

    return Promise.resolve({
      data,
      total: data.length,
    })
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<DeviceDto>> => {
    const record = await get<DeviceDto>(DEVICES_URL, `/${id}`)

    return {
      data: record,
    }
  },
  create: async (
    resource: string,
    { data }: CreateParams<CreateRecordRequest>,
  ): Promise<CreateResult<DeviceDto>> => {
    const created = await post<CreateRecordRequest, DeviceDto>(DEVICES_URL, {
      ...data,
      plantID: data.plantID || -1,
    })

    return {
      data: created,
    }
  },
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<DeviceDto>> => {
    const data = await get<DeviceDto[]>(
      DEVICES_URL,
      `/GetMany/${ids.join(',')}`,
    )

    return Promise.resolve({ data })
  },
} as DataProvider

interface CreateRecordRequest {
  readonly plantID: number
  readonly name: string
}

export default provider
