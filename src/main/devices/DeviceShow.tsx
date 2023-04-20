import React from 'react'
import {
  CreateButton,
  ReferenceField,
  Show,
  ShowProps,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowContext,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

const DevicePlantTab = () => {
  const { isFetching, isLoading, record } = useShowContext()

  return !isFetching &&
    !isLoading &&
    record?.plantID &&
    record?.plantID !== -1 ? (
    <>
      <h3>plant</h3>
      <Show resource={ResourceName.PLANTS} id={record?.plantID}>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <ReferenceField source="speciesId" reference={ResourceName.SPECIES}>
            <TextField source="name" />
          </ReferenceField>
        </SimpleShowLayout>
      </Show>
    </>
  ) : (
    <div>
      <h4>no plant to show</h4>
      <CreateButton
        resource={ResourceName.PLANTS}
        to={`/plants/create?device=${record?.id}`}
      />
    </div>
  )
}

const DeviceShowLayout = ({ ...props }) => {
  const { isFetching, isLoading, record } = useShowContext()

  return (
    <TabbedShowLayout {...props}>
      <Tab label="general">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
      {!isFetching && !isLoading && record?.plantID && (
        <Tab label="plant">
          <DevicePlantTab />
        </Tab>
      )}
    </TabbedShowLayout>
  )
}

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <DeviceShowLayout />
  </Show>
)
