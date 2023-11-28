import { useState } from "react";
import { postUser } from "../services/User";
import { validateRegisterForm } from "../helpers";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [hasErrors, setHasErrors] = useState(false)

  const handlerSubmit = async(e) => {
    e.preventDefault()

    const errors = validateRegisterForm(data)
  
    setErrors(errors)
    
    if(Object.keys(errors).length === 0){
      postUser(data)
        .then((data) => {
          setUserData(data);
        })
        .catch((e) => {
          setHasErrors(true)
          setErrors({
            "email": e.message
          })
        })
      .finally(() => setIsFetching(false));
    }

  }
  return { userData, errors, hasErrors, isFetching, handlerSubmit };
};
