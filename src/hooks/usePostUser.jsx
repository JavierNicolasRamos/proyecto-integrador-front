import { useState } from "react";
import { postUser } from "../services/User";
import { validateForm } from "../helpers/validateForm";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [hasErrors, setHasErrors] = useState({})
  const [statusResponse, setStatusResponse] = useState({}); // Nuevo estado para el statusResponse


  const handlerSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(data))

    postUser(data)
    .then((data, status ) => {
      setUserData(data);
      setStatusResponse(status);
      setHasErrors(false);
    })
      .catch((e) => {
        setHasErrors(e)
        setErrors(e)
      })
    .finally(() => setIsFetching(false));
  }

  return { userData, hasErrors, errors, isFetching, handlerSubmit };
};
