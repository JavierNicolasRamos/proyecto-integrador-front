import { useState } from "react";
import { postUser } from "../services/User";
import { validateForm } from "../helpers/validateForm";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [statusResponse, setStatusResponse] = useState({}); // Nuevo estado para el statusResponse
  

  const handlerSubmit = async(e) => {
    e.preventDefault()

    setErrors(validateForm(data))
    if(errors.length === 0){
      postUser(data)
      .then((data, status ) => {
        setUserData(data);
        setStatusResponse(status);
      })
        .catch((e) => {
          setErrors(e)
        })
      .finally(() => setIsFetching(false));
    }

  }
  
  return { userData, errors, isFetching, handlerSubmit };
};
