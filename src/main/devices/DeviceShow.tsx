import React from "react"
import { Show, ShowProps, Tab, TabbedShowLayout, TextField } from "react-admin"

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="general">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
    </TabbedShowLayout>
  </Show>
)