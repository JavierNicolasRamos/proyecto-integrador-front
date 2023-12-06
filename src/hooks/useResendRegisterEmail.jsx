import { useState } from "react"
import { resendEmail } from "../services/index"

export const useResendRegisterEmail = () => {

  const [error, setError] = useState()
  const [email, setEmail] = useState('')
  const [isFetching, setIsFetching] = useState()
  const [sendSuccess, setSendSuccess] = useState()

  const handlerSubmitEmail = (e) => {

    e.preventDefault()
    setIsFetching(true) 
    
    resendEmail(email)
    .then(() => {
      setSendSuccess(true)
    })
    .catch((e) => {
      setError(e.message)
    })
    .finally(() => {
      setIsFetching(false)
    })

  }

  return { handlerSubmitEmail, email, setEmail, error, isFetching, sendSuccess }

}