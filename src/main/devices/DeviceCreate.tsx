import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin'
import { SliderInput } from '../common/SliderInput'

export const DeviceCreate = (props: CreateProps) => {
  const userId = localStorage.getItem('userId')

  return (
    <Create>
      <SimpleForm defaultValues={{ userId }}>
        <TextInput source="userId" disabled fullWidth />
        <TextInput source="name" fullWidth />
        <SliderInput source="testSlider" fullWidth />
      </SimpleForm>
    </Create>
  )
}
