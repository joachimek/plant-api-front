import { DataProvider } from 'react-admin'
import { GuideDto } from '../../dto/guides/GuideDto'

const fakeList: GuideDto[] = []

const provider = {
  getOne: (resource, { id }: { id: string }) => {
    const found = fakeList.find((v) => `${v.id}` === id)
    if (found) {
      return Promise.resolve({
        data: found,
      })
    }
    return Promise.reject(new Error())
  },
  getList: (resource, params) =>
    Promise.resolve({ data: fakeList, total: fakeList.length }),
} as DataProvider

export default provider
