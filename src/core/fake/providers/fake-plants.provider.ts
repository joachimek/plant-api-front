import { DataProvider } from 'react-admin'
import { PlantDto } from '../../dto/plants/PlantDto'

const fakeList: PlantDto[] = []

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
