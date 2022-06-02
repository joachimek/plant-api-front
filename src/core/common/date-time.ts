export type DateTime =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}` // 2021-07-13T15:11:06.771267

export const formatDate = (value: string | undefined) => {
  if (value == null || value === '') {
    return ''
  }
  return value.includes('T') ? value.substring(0, 10) : value
}

export const formatTime = (value: string | undefined) => {
  if (value == null || value === '') {
    return ''
  }
  return value.includes('T') ? value.substring(11, 16) : value
}

export const ignoreTimezoneOffset = (value: Date) => {
  const tzoffset = value.getTimezoneOffset() * 60000 //offset in milliseconds
  return new Date(value.getTime() - tzoffset)
}
