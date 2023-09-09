import { DataProvider, sanitizeFetchType, ValidUntil } from 'react-admin'
import { ResourceName } from './ResourceName'
import deviceProvider from './devices/device.provider'
import guideProvider from './guides/guides.provider'
import plantsProvider from './plants/plant.provider'
import plantsHistProvider from './plants-hist/plants-hist.provider'
import speciesProvider from './species/species.provider'
import usersProvider from './users/user.provider'
import reviewsProvider from './reviews/reviews.provider'

export interface DataProviderResult<RecordType> {
  readonly data: RecordType
}

export interface CashableDataProviderResult<RecordType>
  extends DataProviderResult<RecordType> {
  validUntil?: ValidUntil
}

const dataProviders: Record<ResourceName, DataProvider> = {
  [ResourceName.DEVICES]: deviceProvider,
  [ResourceName.GUIDES]: guideProvider,
  [ResourceName.PLANTS]: plantsProvider,
  [ResourceName.PLANTS_HIST]: plantsHistProvider,
  [ResourceName.SPECIES]: speciesProvider,
  [ResourceName.USERS]: usersProvider,
  [ResourceName.REVIEWS]: reviewsProvider,
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
