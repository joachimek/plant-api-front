import { DataProvider, sanitizeFetchType, ValidUntil } from 'react-admin'
import { ResourceName } from './ResourceName'
import deviceProvider from './devices/device.provider'
import plantsProvider from './plants/plant.provider'
import plantsHistProvider from './plants-hist/plants-hist.provider'
import usersProvider from './users/user.provider'

export interface DataProviderResult<RecordType> {
  readonly data: RecordType
}

export interface CashableDataProviderResult<RecordType>
  extends DataProviderResult<RecordType> {
  validUntil?: ValidUntil
}

const dataProviders: Record<ResourceName, DataProvider> = {
  [ResourceName.DEVICES]: deviceProvider,
  [ResourceName.PLANTS]: plantsProvider,
  [ResourceName.PLANTS_HIST]: plantsHistProvider,
  [ResourceName.USERS]: usersProvider,
}

const providers = (
  fetchType: string,
  resource: ResourceName,
  params: unknown,
): DataProvider => {
  const selectedProvider = dataProviders[resource]
  const type = sanitizeFetchType(fetchType)
  return selectedProvider[type](resource, params)
}

export default providers
