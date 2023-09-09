import { Slider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Labeled, useInput } from 'react-admin'

const useStyles = makeStyles({
  input: {
    marginTop: 8,
    marginBottom: 4,
  },
  slider: {
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    width: 'auto !important',
  },
})

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 10,
    label: '10%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 30,
    label: '30%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 60,
    label: '60%',
  },
  {
    value: 70,
    label: '70%',
  },
  {
    value: 80,
    label: '80%',
  },
  {
    value: 90,
    label: '90%',
  },
  {
    value: 100,
    label: '100%',
  },
]

export const SliderInput = ({ ...props }) => {
  const { source, label, fullWidth } = props
  const { id, field } = useInput({ source })
  const classes = useStyles()

  return (
    <Labeled
      source={label || source}
      fullWidth={fullWidth}
      className={classes.input}
    >
      <Slider id={id} {...field} marks={marks} className={classes.slider} />
    </Labeled>
  )
}
