import {
  DataProvider,
  GetOneParams,
  GetOneResult,
} from 'react-admin'
import { USERS_URL } from '../api-urls'
import { get } from '../common/fetch.utils'
import { DeviceDto } from '../dto/DeviceDto'
import { UserDto } from '../dto/UserDto'

const provider = {
  getOne: async (
    resource: string,
    { username }: GetOneUserParams,
  ): Promise<GetOneResult<UserDto>> => {
    const record = await get<UserDto>(USERS_URL, `/${username}`)

    return {
      data: record,
    }
  },
} as DataProvider

export interface GetOneUserParams extends GetOneParams {
  readonly username: string
}

export default provider