import { DynamicForm, Forest, Yard } from '@mui/icons-material'
import React from 'react'
import './App.css'
import { Admin, LegacyDataProvider, Resource } from 'react-admin'
import { ResourceName } from './core/ResourceName'
import { DevicesList } from './main/devices/DevicesList'
import dataProvider from './core/data.provider'
import authProvider from './core/auth/auth.provider'
import { DeviceCreate } from './main/devices/DeviceCreate'
import { DeviceShow } from './main/devices/DeviceShow'
import { PlantCreate } from './main/plants/PlantCreate'
import { PlantEdit } from './main/plants/PlantEdit'
import { PlantShow } from './main/plants/PlantShow'
import { SpeciesCreate } from './main/species/SpeciesCreate'
import { SpeciesEdit } from './main/species/SpeciesEdit'
import { SpeciesList } from './main/species/SpeciesList'
import { GuidesList } from './main/guides/GuidesList'
import { GuideCreate } from './main/guides/GuideCreate'
import { GuideEdit } from './main/guides/GuidesEdit'
import { UserShow } from './main/users/UserShow'
import { GuideShow } from './main/guides/GuideShow'
import { ReviewsCreate } from './main/reviews/ReviewCreate'

function App() {
  return (
    <Admin
      dataProvider={dataProvider as unknown as LegacyDataProvider}
      authProvider={authProvider}
    >
      <Resource
        name={ResourceName.DEVICES}
        list={DevicesList}
        show={DeviceShow}
        create={DeviceCreate}
        icon={Yard}
        recordRepresentation="name"
      />
      <Resource
        name={ResourceName.PLANTS}
        show={PlantShow}
        create={PlantCreate}
        edit={PlantEdit}
        recordRepresentation="name"
      />
      <Resource
        name={ResourceName.SPECIES}
        list={SpeciesList}
        create={SpeciesCreate}
        edit={SpeciesEdit}
        icon={Forest}
        recordRepresentation="name"
      />
      <Resource
        name={ResourceName.GUIDES}
        list={GuidesList}
        create={GuideCreate}
        edit={GuideEdit}
        show={GuideShow}
        icon={DynamicForm}
        recordRepresentation="info"
      />
      <Resource name={ResourceName.PLANTS_HIST} />
      <Resource
        name={ResourceName.USERS}
        show={UserShow}
        recordRepresentation="username"
      />
      <Resource
        name={ResourceName.REVIEWS}
        create={ReviewsCreate}
      />
    </Admin>
  )
}

export default App
