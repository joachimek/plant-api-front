import React from "react"
import { FormDataConsumer } from "react-admin"

export const FormDataLogger = () => (
  <FormDataConsumer>
    {
      ({ formData }) => {
        console.log(formData)
        return (
          <div />
        )
      }
    }
  </FormDataConsumer>
)