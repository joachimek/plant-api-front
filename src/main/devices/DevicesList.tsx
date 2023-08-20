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
      <Datagrid {...rest} rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="plantId" reference={ResourceName.PLANTS}>
          <TextField source="id" />
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
      bulkActionButtons={false}
      actions={<DeviceListAction handleOpenCreate={handleOpenCreate} />}
    >
      <DevicesListBase createOpen={createOpen} setCreateOpen={setCreateOpen} />
    </List>
  )
}
