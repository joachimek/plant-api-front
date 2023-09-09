import { Error } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { FunctionField, Labeled } from 'react-admin'
import { PlantsHistDto } from '../../../core/dto/plants-hists/PlantsHistDto'
import { ResourceName } from '../../../core/ResourceName'

const useStyles = makeStyles({
  icon: {
    marginLeft: 8,
  },
})

export const AirHumidityField = ({ ...props }) => {
  const { action, guide, ...rest } = props
  const { airHumidity: guideAirHumidity } = guide
  const { airHumidity: deviceAirHumidity } = action
  const classes = useStyles()

  if (guideAirHumidity + guideAirHumidity * 0.15 < deviceAirHumidity)
    return (
      <Labeled
        {...rest}
        resource={ResourceName.PLANTS_HIST}
        source="airHumidity"
      >
        <FunctionField<PlantsHistDto>
          {...rest}
          record={action}
          resource={ResourceName.PLANTS_HIST}
          source="airHumidity"
          render={(record?: PlantsHistDto) => (
            <div>
              {record?.airHumidity}%
              <Tooltip title="Air humidity too high">
                <Error className={classes.icon} />
              </Tooltip>
            </div>
          )}
        />
      </Labeled>
    )

  if (guideAirHumidity - guideAirHumidity * 0.15 > deviceAirHumidity)
    return (
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="airHumidity"
        render={(record?: PlantsHistDto) => (
          <div>
            `${record?.airHumidity}%`
            <Tooltip title="Air humidity too low">
              <Error className={classes.icon} />
            </Tooltip>
          </div>
        )}
      />
    )

  return (
    <FunctionField<PlantsHistDto>
      {...rest}
      record={action}
      resource={ResourceName.PLANTS_HIST}
      source="airHumidity"
      render={(record?: PlantsHistDto) => <div>`${record?.airHumidity}%`</div>}
    />
  )
}
