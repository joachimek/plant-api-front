import React from "react"
import { Show, ShowProps, SimpleShowLayout, Tab, TabbedShowLayout, TextField, useShowContext } from "react-admin"
import { ResourceName } from "../../core/ResourceName"

const DevicePlantTab = () => {
  const { isFetching, isLoading, record } = useShowContext()

  return (!isFetching && !isLoading && record?.plantID && record?.plantID !== -1) ? (
    <>
      <h3>plant</h3>
      <Show resource={ResourceName.PLANTS} id={record?.plantID}>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
        </SimpleShowLayout>
      </Show>
    </>
  ) : (
    <h4>no plant to show</h4>
  )
}

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="general">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
      <Tab label="plant">
        <DevicePlantTab />
      </Tab>
    </TabbedShowLayout>
  </Show>
)