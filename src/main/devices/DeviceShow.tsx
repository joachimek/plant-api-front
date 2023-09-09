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
import { AirHumidityField } from './device-show/AirHumidityField'
import { SoilHumidityField } from './device-show/SoilHumidityField'
import { TemperatureField } from './device-show/TemperatureField'

const DeviceGeneralTab = ({ ...props }) => {
  const { label } = props
  const { record: device } = useShowContext<DeviceDto>()
  const provider = useDataProvider()
  const { data: action } = useQuery({
    queryKey: [
      ResourceName.PLANTS_HIST,
      'getLastByPlantId',
      { id: device?.plantID },
    ],
    queryFn: () =>
      provider?.getLastByPlantId(ResourceName.PLANTS_HIST, {
        id: device?.plantID,
      }),
    enabled: device?.plantID !== -1 || true,
  })
  const { data: guide } = useQuery({
    queryKey: [ResourceName.GUIDES, 'getByPlantId', { id: device?.plantID }],
    queryFn: () =>
      provider?.getByPlantId(ResourceName.GUIDES, { id: device?.plantID }),
    enabled: device?.plantID !== -1,
  })

  return (
    <Tab {...props} label={label}>
      <TextField source="id" />
      <TextField source="name" />
      {action && guide && <AirHumidityField action={action} guide={guide} />}
      {action && guide && <SoilHumidityField action={action} guide={guide} />}
      {action && guide && <TemperatureField action={action} guide={guide} />}
    </Tab>
  )
}

const DeviceStatusTab = ({ ...props }) => {
  const { label, path } = props

  const { record: device } = useShowContext<DeviceDto>()
  const provider = useDataProvider()
  const { data: lastAction } = useQuery({
    queryKey: [
      ResourceName.PLANTS_HIST,
      'getLastByPlantId',
      { id: device?.plantID },
    ],
    queryFn: () =>
      provider?.getLastByPlantId(ResourceName.PLANTS_HIST, {
        id: device?.plantID,
      }),
    enabled: device?.plantID !== -1,
  })
  const { data: guide } = useQuery({
    queryKey: [ResourceName.GUIDES, 'getByPlantId', { id: device?.plantID }],
    queryFn: () =>
      provider?.getByPlantId(ResourceName.GUIDES, { id: device?.plantID }),
    enabled: device?.plantID !== -1,
  })

  return (
    <Tab {...props} label={label} path={path}>
      {lastAction && guide && (
        <AirHumidityField action={lastAction} guide={guide} />
      )}
      {lastAction && guide && (
        <SoilHumidityField action={lastAction} guide={guide} />
      )}
      {lastAction && guide && (
        <TemperatureField action={lastAction} guide={guide} />
      )}
    </Tab>
  )
}

const DevicePlantTab = ({ ...props }) => {
  const { label, path } = props
  const { isFetching, isLoading, record } = useShowContext()

  if (!isFetching && !isLoading && record?.plantID && record?.plantID !== -1)
    return (
      <Tab {...props} label={label} path={path} LinkComponent={Link}>
        <Show resource={ResourceName.PLANTS} id={record?.plantID} title=" ">
          <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField
              source="speciesID"
              label="Species"
              reference={ResourceName.SPECIES}
            >
              <TextField source="name" label="Species" />
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
  const { record } = useShowContext()

  return (
    <TabbedShowLayout {...props}>
      <DeviceGeneralTab label="details" />
      {record?.plantID !== -1 && <DeviceStatusTab label="statuses" />}
      <DevicePlantTab label="plant" path="plant" />
    </TabbedShowLayout>
  )
}

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <DeviceShowLayout />
  </Show>
)
