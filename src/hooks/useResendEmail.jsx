import { useState } from "react"
import { resendEmail } from "../services/index"
import { validateEmail } from "../helpers"

export const useResendRegisterEmail = (email) => {

  const [errors, setErrors] = useState()

  const handlerSubmit = (e) => {

    e.preventDefault() 

    resendEmail(email)
    .then(() => {
      console.log(email)
    })
    .catch((e) => {
      console.log(e.message)
      setErrors(e.message)
    })

  }

  return { handlerSubmit, errors }

}