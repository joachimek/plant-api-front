import React from "react"
import { Datagrid, List, TextField } from "react-admin"

export const PlantsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
    </Datagrid>
  </List>
)