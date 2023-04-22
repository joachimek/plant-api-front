import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

export const SpeciesList = ({ ...props }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
)
