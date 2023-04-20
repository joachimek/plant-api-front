import React from 'react'
import { Show, SimpleShowLayout, TextField } from 'react-admin'

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
)
