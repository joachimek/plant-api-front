import React from "react"
import { Datagrid, List, ListProps, TextField } from "react-admin"

export const DevicesList = (props: ListProps) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
)