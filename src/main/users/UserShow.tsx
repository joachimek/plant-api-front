import React from 'react'
import { Show, SimpleShowLayout, TextField } from 'react-admin'

export const UserShow = ({ ...props }) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
)
