import React from 'react'
import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'

export const SpeciesCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="info" fullWidth multiline />
      <BooleanInput source="isPublic" fullWidth />
    </SimpleForm>
  </Create>
)
