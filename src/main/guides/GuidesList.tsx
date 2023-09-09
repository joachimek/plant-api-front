import React from 'react'
import { Datagrid, List, ReferenceField, TextField } from 'react-admin'
import { ResourceName } from '../../core/ResourceName'

export const GuidesList = ({ ...props }) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField
        source="speciesID"
        label="Species"
        reference={ResourceName.SPECIES}
      >
        <TextField source="name" label="Species" />
      </ReferenceField>
      <TextField source="info" />
    </Datagrid>
  </List>
)
