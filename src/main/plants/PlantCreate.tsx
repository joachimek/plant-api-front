import React from 'react'
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'
import { useSearchParams } from 'react-router-dom'

export const PlantCreate = ({ ...props }) => {
  const [paramsEntries] = useSearchParams()
  const { device } = Object.fromEntries(paramsEntries)

  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{
          deviceId: device,
        }}
      >
        <TextInput source="name" fullWidth />
        <ReferenceInput source="speciesId" reference={ResourceName.SPECIES} fullWidth>
          <AutocompleteInput fullWidth />
        </ReferenceInput>
        <ReferenceInput source="deviceId" reference={ResourceName.DEVICES} fullWidth>
          <AutocompleteInput fullWidth />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
