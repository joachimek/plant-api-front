export interface ReviewDto {
  readonly id: number
  readonly speciesId: number
  readonly rating: number
  readonly info?: string
}
