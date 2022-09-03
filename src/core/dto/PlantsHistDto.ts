import { DateTime } from "../common/date-time"

export interface PlantsHistDto {
  readonly id: number
  readonly plantId: number
  readonly sunlight: boolean
  readonly date: DateTime
  readonly temperature: string
  readonly airHumidity: string
  readonly soilHumidity: string
  readonly wateredPlant: boolean
  readonly lampOn: boolean
  readonly fanOn: boolean
}
