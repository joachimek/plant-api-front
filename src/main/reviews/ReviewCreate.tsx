import React from 'react'
import {
  AutocompleteInput,
  BooleanInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { useSearchParams } from 'react-router-dom'
import { ResourceName } from '../../core/ResourceName'
import { RatingInput } from './review-create/RatingInput'

export const ReviewsCreate = ({ ...props }) => {
  const [paramsEntries] = useSearchParams()
  const { guide } = Object.fromEntries(paramsEntries)

  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{
          guideId: guide,
        }}
      >
        <ReferenceInput
          reference={ResourceName.GUIDES}
          source="guideId"
          fullWidth
          disabled
        >
          <AutocompleteInput disabled fullWidth />
        </ReferenceInput>
        <RatingInput source="rating" />
        <TextInput source="info" fullWidth multiline />
      </SimpleForm>
    </Create>
  )
}
