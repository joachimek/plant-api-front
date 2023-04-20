import React from 'react'
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin'

export const GuideCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="speciesId" />
      <TextInput source="info" />
      <NumberInput source="maxHumidity" />
      <NumberInput source="minHumidity" />
    </SimpleForm>
  </Create>
)
