const mapping: Record<string, string> = {
  id: 'e=>e.Id',
  name: 'e=>e.Name',
  dateStart: 'e=>e.DateStart',
  dateEnd: 'e=>e.DateEnd',
  status: 'e=>e.Status',
}

export const mapSortEventParam = (key: string) => mapping[key]
