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
  useListContext,
  useRedirect,
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

const DevicesListBase = ({ ...props }) => {
  const { createOpen, setCreateOpen, ...rest } = props
  const refresh = useRefresh()
  const { refetch } = useListContext()
  const redirect = useRedirect()

  const handleCloseCreate = () => {
    setCreateOpen(false)
    redirect('/devices')
  }

  return (
    <>
      <Datagrid {...rest} rowClick="show" bulkActionButtons={false}>
        <TextField source="id" label="ID" />
        <TextField source="name" />
        <ReferenceField
          source="plantID"
          label="Plant"
          reference={ResourceName.PLANTS}
        >
          <TextField source="name" label="Plant" />
        </ReferenceField>
      </Datagrid>
      <DeviceCreateDialog
        {...props}
        open={createOpen}
        handleClose={handleCloseCreate}
        redirect="/devices"
      />
    </>
  )
}

export const DevicesList = (props: ListProps) => {
  const [createOpen, setCreateOpen] = useState<boolean>(false)

  const handleOpenCreate = () => {
    setCreateOpen(true)
  }

  return (
    <List
      {...props}
      actions={<DeviceListAction handleOpenCreate={handleOpenCreate} />}
    >
      <DevicesListBase createOpen={createOpen} setCreateOpen={setCreateOpen} />
    </List>
  )
}
