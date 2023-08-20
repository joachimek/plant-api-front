import { Feedback } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import React from "react"
import { FunctionField } from "react-admin"
import { PlantsHistDto } from "../../../core/dto/plants-hists/PlantsHistDto"
import { ResourceName } from "../../../core/ResourceName"

export const SoilHumidityField = ({ ...props }) => {
  const { action, guide, ...rest } = props
  const { maxHumidity: guideMaxSoilHumidity, minHumidity: guideMinSoilHumidity } = guide
  const { soilHumidity: deviceSoilHumidity } = action

  if (guideMaxSoilHumidity < deviceSoilHumidity)
    return (
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="soilHumidity"
        render={(record?: PlantsHistDto) => (
          <div>
            `${record?.airHumidity}%`
            <Tooltip title="soil humidity too high">
              <Feedback />
            </Tooltip>
          </div>
        )}
      />
    )

  if (guideMinSoilHumidity > deviceSoilHumidity)
    return (
      <FunctionField<PlantsHistDto>
        {...rest}
        record={action}
        resource={ResourceName.PLANTS_HIST}
        source="soilHumidity"
        render={(record?: PlantsHistDto) => (
          <div>
            `${record?.airHumidity}%`
            <Tooltip title="soil humidity too low">
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
      source="soilHumidity"
      render={(record?: PlantsHistDto) => (
        <div>
          `${record?.airHumidity}%`
        </div>
      )}
    />
  )
}