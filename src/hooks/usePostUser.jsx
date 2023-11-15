import { useState } from "react";
import { postUser } from "../services/User";
import { validateForm } from "../helpers/validateForm";

export const usePostUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true);
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [hasErrors, setHasErrors] = useState({})
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(data))

    postUser(data)
    .then(({surname, email, name, password}) => setUserData({
      surname: surname,
      email: email,
      name: name,
      password: password
    }))
      .catch((e) => {
        console.log("error hook", e)
        setHasErrors(e)
      })
    .finally(() => setIsFetching(false));
  }

  return { userData, hasErrors, errors, isFetching, handleSubmit };
};
