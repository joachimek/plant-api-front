import React from 'react'
import {
  AutocompleteInput,
  Create,
  CreateProps,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

export const DeviceCreate = (props: CreateProps) => {
  const userId = localStorage.getItem('userId')

  return (
    <Create {...props}>
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
    </Create>
  )
}
