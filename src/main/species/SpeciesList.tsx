import React from 'react'
import {
  Datagrid,
  FunctionField,
  List,
  TextField,
  TextInput,
} from 'react-admin'
import { SpeciesDto } from '../../core/dto/species/SpeciesDto'

const speciesListFilters = [<TextInput source="name" alwaysOn />]

export const SpeciesList = ({ ...props }) => (
  <List {...props} filters={speciesListFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <FunctionField<SpeciesDto>
        source="info"
        render={(species?: SpeciesDto) =>
          species?.info
            ? `${species.info.substring(0, 40)}${
                species.info.length > 40 ? '...' : undefined
              }`
            : undefined
        }
      />
    </Datagrid>
  </List>
)
