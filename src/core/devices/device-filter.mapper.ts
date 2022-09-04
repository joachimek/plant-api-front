const mapping: Record<
  string,
  (lambdaParameter: string, value: any, otherValues: any) => string | null
> = {
  name: (lambdaParameter, value) =>
    `${lambdaParameter}.Name.Contains("${value}")`,
}

const filterMapper = (key: string) =>
  mapping[key] as (
    lambdaParameter: string,
    value: any,
    otherValues: any,
  ) => string

export default filterMapper
