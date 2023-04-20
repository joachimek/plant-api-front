import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin'

export const DeviceCreate = (props: CreateProps) => {
  const userId = localStorage.getItem('userId')

  return (
    <Create>
      <SimpleForm defaultValues={{ userId }}>
        <TextInput source="userId" disabled />
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  )
}
