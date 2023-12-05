import { useState } from "react";
import { loginUser } from "../services/User";
import { useUser } from "../context/UserContext";
import { validateLoginForm } from "../helpers/validateLoginForm";

export const useLoginUser = (data) => {
  const [isFetching, setIsFetching] = useState(false);
  const [hasErrors, setHasErrors] = useState(false)
  const [errors,  setErrors] = useState("")
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    role: ''
  });

  const { updateUser, setIsLogged, avatar, setAvatar } = useUser();

  const handlerSubmit = (e) => {
    e.preventDefault();

    setIsFetching(true)
    const errors = validateLoginForm(data)

    if(Object.keys(errors).length !== 0){
      setHasErrors(Object.keys(errors).length)
    }
    
    // Verificar si no hay errores antes de realizar la consulta
    if (Object.keys(errors).length === 0) {
      loginUser(data)
      .then(({ name, surname, role, status }) => { 
          if(status === 200){ 
            updateUser({ name, surname, role })
            setUserData({ name, surname, role })
            setIsLogged(true)
            setAvatar(sessionStorage.getItem('avatar'))
            console.log(avatar)
            setHasErrors(false)
          }
        })
        .catch( (status) => {
          setErrors(status.message)
          setHasErrors(true)
        })
        .finally(() => {
          setIsFetching(false);
        });

    }

  };

  return { userData, errors, hasErrors, isFetching, handlerSubmit };
};