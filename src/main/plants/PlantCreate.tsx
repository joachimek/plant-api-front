import React from 'react'
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

export const PlantCreate = ({ ...props }) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  console.log(window.location)

  return (
    <Create {...props}>
      <SimpleForm>
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
    </Create>
  )
}
