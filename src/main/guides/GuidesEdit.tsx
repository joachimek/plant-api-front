import React from 'react'
import {
  Create,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const GuideEdit = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" fullWidth />
      <TextInput source="speciesId" fullWidth />
      <TextInput source="info" fullWidth />
      <NumberInput source="maxHumidity" fullWidth />
      <NumberInput source="minHumidity" fullWidth />
    </SimpleForm>
  </Create>
)
