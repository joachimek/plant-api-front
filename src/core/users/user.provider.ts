import {
  DataProvider,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyResult,
  GetOneParams,
  GetOneResult,
} from 'react-admin'
import { USERS_URL } from '../api-urls'
import { get } from '../common/fetch.utils'
import { UserDto } from '../dto/users/UserDto'

const provider = {
  getList: async (
    resource: string,
    props: GetListParams,
  ): Promise<GetListResult<UserDto>> => {
    return Promise.resolve({
      data: [],
      total: 0,
    })
  },
  getOne: async (
    resource: string,
    { username }: GetOneUserParams,
  ): Promise<GetOneResult<UserDto>> => {
    const record = await get<UserDto>(USERS_URL, `/${username}`)

    return {
      data: record,
    }
  },
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<UserDto>> => {
    const data = await get<UserDto[]>(USERS_URL, `/GetMany/${ids.join(',')}`)

    return Promise.resolve({ data })
  },
} as DataProvider

export interface GetOneUserParams extends GetOneParams {
  readonly username: string
}

export default provider
