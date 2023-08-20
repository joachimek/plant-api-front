import React from 'react'
import {
  CreateButton,
  FunctionField,
  GET_ONE,
  ReferenceField,
  Show,
  ShowProps,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  TextField,
  useDataProvider,
  useShowContext,
} from 'react-admin'
import { useQuery } from 'react-query'
import { ResourceName } from '../../core/ResourceName'
import { DeviceDto } from '../../core/dto/devices/DeviceDto'
import { Link } from 'react-router-dom'
import { PlantsHistDto } from '../../core/dto/plants-hists/PlantsHistDto'
import { AirHumidityField } from './device-show/AirHumidityField'
import { SoilHumidityField } from './device-show/SoilHumidityField'
import { TemperatureField } from './device-show/TemperatureField'

const DeviceGeneralTab = ({ ...props }) => {
  const { label } = props
  const { record: device } = useShowContext<DeviceDto>()
  const provider = useDataProvider()
  const { data: action } = useQuery({
    queryKey: [ResourceName.PLANTS_HIST, 'getLastByPlantId', { id: device?.plantID }],
    queryFn: () => provider?.getLastByPlantId(ResourceName.PLANTS_HIST, { id: device?.plantID }),
    enabled: device?.plantID !== -1,
  })
  const { data: guide } = useQuery({
    queryKey: [ResourceName.GUIDES, 'getByPlantId', { id: device?.plantID }],
    queryFn: () => provider?.getByPlantId(ResourceName.GUIDES, { id: device?.plantID }),
    enabled: device?.plantID !== -1,
  })

  return (
    <Tab {...props} label={label}>
      <TextField source="id" />
      <TextField source="name" />
      {action && <AirHumidityField action={action} guide={guide} />}
      {action && <SoilHumidityField action={action} guide={guide} />}
      {action && <TemperatureField action={action} guide={guide} />}
    </Tab>
  )
}

const DeviceStatusTab = ({ ...props }) => {
  const { label, path } = props

  const { record: device } = useShowContext<DeviceDto>()
  const provider = useDataProvider()
  const { data: action } = useQuery({
    queryKey: [ResourceName.PLANTS_HIST, 'getLastByPlantId', { id: device?.plantID }],
    queryFn: () => provider?.getLastByPlantId(ResourceName.PLANTS_HIST, { id: device?.plantID }),
    enabled: device?.plantID !== -1,
  })

  return (
    <Tab {...props} label={label} path={path}>

    </Tab>
  )
}

const DevicePlantTab = ({ ...props }) => {
  const { label, path } = props
  const { isFetching, isLoading, record } = useShowContext()

  if (!isFetching && !isLoading && record?.plantID && record?.plantID !== -1)
    return (
      <Tab {...props} label={label} path={path} LinkComponent={Link}>
        <h3>plant</h3>
        <Show resource={ResourceName.PLANTS} id={record?.plantID}>
          <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField source="speciesId" reference={ResourceName.SPECIES}>
              <TextField source="name" />
            </ReferenceField>
          </SimpleShowLayout>
        </Show>
      </Tab>
    )

  return (
    <Tab {...props} label={label} path={path} LinkComponent={Link}>
      <h4>no plant to show</h4>
      <CreateButton
        resource={ResourceName.PLANTS}
        to={`/plants/create?device=${record?.id}`}
      />
    </Tab>
  )
}

const DeviceShowLayout = ({ ...props }) => {
  const { isFetching, isLoading, record } = useShowContext()

  return (
    <TabbedShowLayout {...props}>
      <DeviceGeneralTab label="details" />
      {isFetching && isLoading && record?.plantID !== -1 && (
        <DeviceStatusTab label="statuses" />
      )}
      {!isFetching && !isLoading && (
        <DevicePlantTab label="plant" path="plant" />
      )}
    </TabbedShowLayout>
  )
}

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <DeviceShowLayout />
  </Show>
)
