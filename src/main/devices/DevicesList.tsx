import { Add } from '@mui/icons-material'
import React, { useState } from 'react'
import {
  Button,
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  TopToolbar,
  sanitizeListRestProps,
  useRefresh,
} from 'react-admin'
import { DeviceCreateDialog } from './DeviceCreateDialog'
import { ResourceName } from '../../core/ResourceName'

const DeviceListAction = ({ ...props }) => {
  const { handleOpenCreate, ...rest } = props

  return (
    <TopToolbar {...sanitizeListRestProps(rest)}>
      <Button startIcon={<Add />} label="Create" onClick={handleOpenCreate} />
    </TopToolbar>
  )
}

export const DevicesList = (props: ListProps) => {
  const [createOpen, setCreateOpen] = useState<boolean>(false)
  const refresh = useRefresh()

  const handleCloseCreate = () => {
    setCreateOpen(false)
    //todo: fix refresh
    refresh()
  }

  const handleOpenCreate = () => {
    setCreateOpen(true)
  }

  return (
    <>
      <DeviceCreateDialog {...props} open={createOpen} handleClose={handleCloseCreate} redirect="/devices" />
      <List {...props} bulkActionButtons={false} actions={<DeviceListAction handleOpenCreate={handleOpenCreate} />}>
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
