import React from 'react'
import { FunctionField, Labeled } from 'react-admin'
import { PlantsHistDto } from '../../../core/dto/plants-hists/PlantsHistDto'
import { ResourceName } from '../../../core/ResourceName'

export const TemperatureField = ({ ...props }) => {
  const { action, ...rest } = props

  return (
    <Labeled {...rest} resource={ResourceName.PLANTS_HIST} source="temperature">
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="temperature"
        render={(record?: PlantsHistDto) => <div>{record?.airHumidity}%</div>}
      />
    </Labeled>
  )
}
