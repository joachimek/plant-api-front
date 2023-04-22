import React from 'react'
import {
  AutocompleteInput,
  CreateProps,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'
import { CreateDialog } from '../common/FormDialog'

export const DeviceCreateDialog = (props: CreateProps) => {
  const userId = localStorage.getItem('userId')

  return (
    <CreateDialog
      {...props}
      open={false}
      handleClose={() => console.log('test')}
    >
      <SimpleForm defaultValues={{ userId }}>
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
