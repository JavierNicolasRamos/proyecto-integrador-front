import { useState } from "react";
import { postUser } from "../services/User";
import { validateRegisterForm } from "../helpers";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(false)
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [hasErrors, setHasErrors] = useState(false)
  const [statusResponse, setStatusResponse ] = useState()

  const handlerSubmit = async(e) => {
    
    e.preventDefault()
    
    const errors = validateRegisterForm(data)
    
    setErrors(errors)
    setIsFetching(true)
    
    postUser(data)
    .then(({data, status}) => {
        setUserData(data)
        setStatusResponse(status)
      })
      .catch((e) => {
        setHasErrors(true)
        setErrors({
          ...errors,
          "email": e.message
        })
      })
    .finally(() => {
      setIsFetching(false)
    });

  }
  
  return { 
    userData,
    statusResponse,
    errors, 
    hasErrors,
    isFetching, 
    handlerSubmit 
  };
};
