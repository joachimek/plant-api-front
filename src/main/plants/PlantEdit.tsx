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
      <TextInput source="name" fullWidth />
      <ReferenceInput source="speciesId" reference={ResourceName.SPECIES} fullWidth>
        <AutocompleteInput fullWidth />
      </ReferenceInput>
      <ReferenceInput source="guideId" reference={ResourceName.GUIDES} fullWidth>
        <AutocompleteInput fullWidth />
      </ReferenceInput>
      <ReferenceInput source="deviceId" reference={ResourceName.DEVICES} fullWidth>
        <AutocompleteInput fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)
