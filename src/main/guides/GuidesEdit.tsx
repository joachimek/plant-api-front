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
      <TextField source="id" />
      <TextInput source="speciesId" />
      <TextInput source="info" />
      <NumberInput source="maxHumidity" />
      <NumberInput source="minHumidity" />
    </SimpleForm>
  </Create>
)
