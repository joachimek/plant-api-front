import React from 'react'
import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

export const PlantEdit = ({ ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="name" />
      <ReferenceInput source="speciesId" reference={ResourceName.SPECIES}>
        <AutocompleteInput />
      </ReferenceInput>
      <ReferenceInput source="guideId" reference={ResourceName.GUIDES}>
        <AutocompleteInput />
      </ReferenceInput>
      <ReferenceInput source="deviceId" reference={ResourceName.DEVICES}>
        <AutocompleteInput />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)
