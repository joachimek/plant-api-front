import React from 'react'
import {
  AutocompleteInput,
  BooleanInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { SliderInput } from '../common/SliderInput'
import { ResourceName } from '../../core/ResourceName'

export const GuideCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        reference={ResourceName.SPECIES}
        source="speciesID"
        fullWidth
      >
        <AutocompleteInput fullWidth />
      </ReferenceInput>
      <TextInput source="info" fullWidth />
      <SliderInput source="maxHumidity" fullWidth />
      <SliderInput source="minHumidity" fullWidth />
      <SliderInput source="airHumidity" fullWidth />
      <SliderInput source="sunlightTime" fullWidth />
      <BooleanInput source="isPublic" fullWidth />
    </SimpleForm>
  </Create>
)
