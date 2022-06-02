import { DataProvider, sanitizeFetchType } from 'react-admin'
import { ResourceName } from '../ResourceName'
import fakeDevicesProvider from './providers/fake-devices.provider'

const dataProviders: Record<string, DataProvider> = {
  [ResourceName.DEVICES]: fakeDevicesProvider,
}

export default (
  fetchType: string,
  resource: string,
  params: unknown,
): Promise<unknown> => {
  const selectedProvider = dataProviders[resource as ResourceName]
  const type = sanitizeFetchType(fetchType)
  return selectedProvider[type](resource, params)
}
