import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

export const GuidesList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="speciesId" />
      <TextField source="info" />
      <TextField source="maxHumidity" />
      <TextField source="minHumidity" />
    </Datagrid>
  </List>
)
