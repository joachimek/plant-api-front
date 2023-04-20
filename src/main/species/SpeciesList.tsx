import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

export const SpeciesList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
)
