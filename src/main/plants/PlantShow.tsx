import React from 'react'
import {
  ReferenceField,
  Show,
  ShowProps,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowContext,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

const PlantShowLayout = ({ ...props }) => {
  const { isFetching, isLoading } = useShowContext()

  return (
    <TabbedShowLayout {...props}>
      <Tab label="general">
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="speciesId" reference={ResourceName.SPECIES}>
          <TextField source="name" />
        </ReferenceField>
      </Tab>
      {!isFetching && !isLoading && (
        <Tab label="history">
          <div />
        </Tab>
      )}
    </TabbedShowLayout>
  )
}

export const PlantShow = (props: ShowProps) => (
  <Show {...props}>
    <PlantShowLayout />
  </Show>
)
