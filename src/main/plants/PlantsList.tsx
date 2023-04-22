import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

export const PlantsList = ({ ...props }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
    </Datagrid>
  </List>
)
