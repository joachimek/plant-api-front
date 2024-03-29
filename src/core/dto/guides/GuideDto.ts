export interface GuideDto {
  readonly id: number
  readonly speciesID: number
  readonly userID: number
  readonly info: string
  readonly maxHumidity: number
  readonly minHumidity: number
  readonly airHumidity: number
  readonly sunlightTime: number
  readonly isPublic: boolean
}
