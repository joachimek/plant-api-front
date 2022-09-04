import React from "react"
import { Datagrid, FunctionField, List, TextField } from "react-admin"

export const PlantsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
) 