const mapping: Record<
  string,
  (lambdaParameter: string, value: any, otherValues: any) => string | null
> = {
  name: (lambdaParameter, value) =>
    `${lambdaParameter}.Name.Contains("${value}")`,
  filterVerifierDeviceId: () => null,
  verifierDeviceId: (lambdaParameter, value, otherValues) =>
    otherValues.filterVerifierDeviceId === false
      ? null
      : `${lambdaParameter}.VerifierDevices.Any(vd=>vd.Id==${value})`,
  status: (lambdaParameter, value) =>
    `${lambdaParameter}.Status.Equals(TicketAPI.Models.Enums.TicketManagement.EventStatuses.${value})`,
  objectId: (lambdaParameter, value) =>
    `${lambdaParameter}.Objects.Any(ob=>ob.Id.Equals(${value}))`,
  companyId: (lambdaParameter, value) =>
    `${lambdaParameter}.Companies.Any(c=>c.Id.Equals(${value}))`,
  hasObjects: (lambdaParameter) => `${lambdaParameter}.Objects.Count>0`,
}

const filterMapper = (key: string) =>
  mapping[key] as (
    lambdaParameter: string,
    value: any,
    otherValues: any,
  ) => string

export default filterMapper
