import React from 'react'
import {
  BooleanInput,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const SpeciesEdit = ({ ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="name" />
      <TextInput source="info" fullWidth multiline />
      <BooleanInput source="isPublic" />
    </SimpleForm>
  </Edit>
)
