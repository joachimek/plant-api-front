import { Slider } from '@mui/material'
import React from 'react'
import { Labeled, useInput } from 'react-admin'

export const SliderInput = ({ ...props }) => {
  const { source, label, fullWidth } = props
  const { id, field } = useInput({ source })

  return (
    <Labeled source={label || source} fullWidth={fullWidth}>
      <Slider id={id} {...field} />
    </Labeled>
  )
}
