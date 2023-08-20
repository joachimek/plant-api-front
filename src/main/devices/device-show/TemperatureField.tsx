import { Feedback } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import React from "react"
import { FunctionField } from "react-admin"
import { PlantsHistDto } from "../../../core/dto/plants-hists/PlantsHistDto"
import { ResourceName } from "../../../core/ResourceName"

export const TemperatureField = ({ ...props }) => {
  const { action, ...rest } = props
  
  return (
    <FunctionField<PlantsHistDto>
      {...rest}
      record={action}
      resource={ResourceName.PLANTS_HIST}
      source="temperature"
      render={(record?: PlantsHistDto) => (
        <div>
          `${record?.airHumidity}%`
        </div>
      )}
    />
  )
}