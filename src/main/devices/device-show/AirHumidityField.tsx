import { Feedback } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import React from "react"
import { FunctionField } from "react-admin"
import { PlantsHistDto } from "../../../core/dto/plants-hists/PlantsHistDto"
import { ResourceName } from "../../../core/ResourceName"

export const AirHumidityField = ({ ...props }) => {
  const { action, guide, ...rest } = props
  const { airHumidity: guideAirHumidity } = guide
  const { airHumidity: deviceAirHumidity } = action

  if ((guideAirHumidity + guideAirHumidity * 0.15) < deviceAirHumidity)
    return (
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="airHumidity"
        render={(record?: PlantsHistDto) => (
          <div>
            `${record?.airHumidity}%`
            <Tooltip title="air humidity too high">
              <Feedback />
            </Tooltip>
          </div>
        )}
      />
    )

  if ((guideAirHumidity - guideAirHumidity * 0.15) > deviceAirHumidity)
    return (
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="airHumidity"
        render={(record?: PlantsHistDto) => (
          <div>
            `${record?.airHumidity}%`
            <Tooltip title="air humidity too low">
              <Feedback />
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
      render={(record?: PlantsHistDto) => (
        <div>
          `${record?.airHumidity}%`
        </div>
      )}
    />
  )
}