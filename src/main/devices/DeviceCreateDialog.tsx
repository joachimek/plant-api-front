import React from 'react'
import {
  AutocompleteInput,
  ReferenceInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'
import { CreateDialog, CreateDialogProps } from '../common/FormDialog'

const DeviceCreateDialogToolbar = ({ ...props }) => {
  const { handleClose, ...rest } = props

  return (
    <Toolbar {...rest}>
      <SaveButton onClick={handleClose} />
    </Toolbar>
  )
}

export const DeviceCreateDialog = ({ ...props }) => {
  const { handleClose } = props

  const userId = localStorage.getItem('userId')

  return (
    <CreateDialog
      {...props as CreateDialogProps}
    >
      <SimpleForm defaultValues={{ userId }} toolbar={<DeviceCreateDialogToolbar handleClose={handleClose} />}>
        <ReferenceInput
          source="userId"
          reference={ResourceName.USERS}
          fullWidth
        >
          <AutocompleteInput source="userId" disabled fullWidth />
        </ReferenceInput>
        <TextInput source="name" fullWidth />
      </SimpleForm>
    </CreateDialog>
  )
}
