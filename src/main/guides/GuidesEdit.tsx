import React from 'react'
import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'
import { SliderInput } from '../common/SliderInput'

export const GuideEdit = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="info" fullWidth />
      <SliderInput source="maxHumidity" fullWidth />
      <SliderInput source="minHumidity" fullWidth />
      <SliderInput source="airHumidity" fullWidth />
      <SliderInput source="sunlightTime" fullWidth />
      <BooleanInput source="isPublic" fullWidth />
    </SimpleForm>
  </Create>
)
