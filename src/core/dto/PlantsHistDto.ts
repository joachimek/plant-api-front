import { Identifier } from "react-admin"
import { DateTime } from "../common/date-time"

export interface PlantsHistDto {
  readonly ID: number
  readonly PlantID: number
  readonly Sunlight: boolean
  readonly Date: DateTime
  readonly Temperature: string
  readonly AirHumidity: string
  readonly SoilHumidity: string
  readonly WateredPlant: boolean
  readonly LampOn: boolean
  readonly FanOn: boolean
}

export interface PlantHistRAResponse extends PlantsHistDto {
  readonly id: Identifier
}