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

export const SoilHumidityField = ({ ...props }) => {
  const { action, guide, ...rest } = props
  const {
    maxHumidity: guideMaxSoilHumidity,
    minHumidity: guideMinSoilHumidity,
  } = guide
  const { soilHumidity: deviceSoilHumidity } = action
  const classes = useStyles()

  if (guideMaxSoilHumidity < deviceSoilHumidity)
    return (
      <Labeled
        {...rest}
        resource={ResourceName.PLANTS_HIST}
        source="soilHumidity"
      >
        <FunctionField<PlantsHistDto>
          {...rest}
          record={action}
          resource={ResourceName.PLANTS_HIST}
          source="soilHumidity"
          render={(record?: PlantsHistDto) => (
            <div>
              {record?.airHumidity}%
              <Tooltip title="soil humidity too high">
                <Error className={classes.icon} />
              </Tooltip>
            </div>
          )}
        />
      </Labeled>
    )

  if (guideMinSoilHumidity > deviceSoilHumidity)
    return (
      <Labeled
        {...rest}
        resource={ResourceName.PLANTS_HIST}
        source="soilHumidity"
      >
        <FunctionField<PlantsHistDto>
          {...rest}
          record={action}
          resource={ResourceName.PLANTS_HIST}
          source="soilHumidity"
          render={(record?: PlantsHistDto) => (
            <div>
              {record?.airHumidity}%
              <Tooltip title="soil humidity too low">
                <Error className={classes.icon} />
              </Tooltip>
            </div>
          )}
        />
      </Labeled>
    )

  return (
    <Labeled
      {...rest}
      resource={ResourceName.PLANTS_HIST}
      source="soilHumidity"
    >
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="soilHumidity"
        render={(record?: PlantsHistDto) => <div>{record?.airHumidity}%</div>}
      />
    </Labeled>
  )
}
