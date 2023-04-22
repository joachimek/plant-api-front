import React, { useState } from 'react'
import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from 'react-admin'
import { DeviceCreateDialog } from './DeviceCreateDialog'
import { ResourceName } from '../../core/ResourceName'

export const DevicesList = (props: ListProps) => {
  const [createOpen, setCreateOpen] = useState<boolean>(false)

  return (
    <>
      <DeviceCreateDialog {...props} />
      <List {...props} bulkActionButtons={false}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <ReferenceField source="plantId" reference={ResourceName.PLANTS}>
            <TextField source="id" />
          </ReferenceField>
        </Datagrid>
      </List>
    </>
  )
}
