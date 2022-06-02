import { ValidUntil } from 'react-admin'

export interface DataProviderExtensionResult<RecordType> {
  readonly data: RecordType
}

export interface CacheableDataProviderExtensionResult<RecordType>
  extends DataProviderExtensionResult<RecordType> {
  validUntil?: ValidUntil
}
