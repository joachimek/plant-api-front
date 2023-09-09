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
import { REVIEWS_URL } from '../api-urls'
import { get, post } from '../common/fetch.utils'
import { GetListParams } from '../common/get-list.params'
import { ReviewDto } from '../dto/reviews/ReviewDto'

const provider = {
  getList: async (
    resource: string,
    { filter, sort, pagination }: GetListParams,
  ): Promise<GetListResult<ReviewDto>> => {
    if (filter?.guide) {
      const data = await get<ReviewDto[]>(
        `${REVIEWS_URL}/GetByGuideId/`,
        filter?.guide,
      )

      return Promise.resolve({
        data,
        total: data.length,
      })
    }

    return {
      data: [],
      total: 0,
    }
  },
  getOne: async (
    resource: string,
    { id }: GetOneParams,
  ): Promise<GetOneResult<ReviewDto>> => {
    const record = await get<ReviewDto>(REVIEWS_URL, `/${id}`)

    return {
      data: record,
    }
  },
  create: async (
    resource: string,
    { data }: CreateParams<CreateRecordRequest>,
  ): Promise<CreateResult<ReviewDto>> => {
    const created = await post<CreateRecordRequest, ReviewDto>(REVIEWS_URL, {
      ...data,
    })

    return {
      data: created,
    }
  },
  getMany: async (
    resource: string,
    { ids }: GetManyParams,
  ): Promise<GetManyResult<ReviewDto>> => {
    const data = await get<ReviewDto[]>(
      REVIEWS_URL,
      `/GetMany/${ids.join(',')}`,
    )

    return Promise.resolve({ data })
  },
} as DataProvider

interface CreateRecordRequest {
  readonly speciesId: number
  readonly rating: number
  readonly info?: string
}

export default provider
