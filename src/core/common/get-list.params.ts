import { GetListParams as GLP, GetManyReferenceParams as GMRP, SortPayload as SP } from 'react-admin'

export interface SortPayload extends SP {
  readonly field: string
  readonly order: 'ASC' | 'DESC'
}

export interface GetListParams extends GLP {
  readonly sort: SortPayload
}

export interface GetManyRefrenceParams extends GMRP {
  readonly sort: SortPayload
}
