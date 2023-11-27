import { useState } from "react";
import { postUser } from "../services/User";
import { validateRegisterForm } from "../helpers";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  

  const handlerSubmit = async(e) => {
    e.preventDefault()

    setErrors(validateRegisterForm(data))
    
    if(errors.length === 0){
      postUser(data)
      .then((data) => {
        setUserData(data);
      })
        .catch((e) => {
          setErrors(e)
        })
      .finally(() => setIsFetching(false));
    }

  }
  
  return { userData, errors, isFetching, handlerSubmit };
};
