import { useState } from "react";
import { loginUser } from "../services/User";
import { useUser } from "../context/UserContext";
import { validateLoginForm } from "../helpers/validateLoginForm";

export const useLoginUser = (data) => {
  const [isFetching, setIsFetching] = useState(true);
  const [hasErrors, setHasErrors] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    role: ''
  });

  const { updateUser, setIsLogged } = useUser();

  const handlerSubmit = async(e) => {
    e.preventDefault();

    const errors = validateLoginForm(data)

    if(Object.keys(errors).length !== 0){
      setHasErrors(Object.keys(errors).length)
    }
    
    // Verificar si no hay errores antes de realizar la consulta
    if (Object.keys(errors).length === 0) {
      loginUser(data)
      .then(({ name, surname, role }) => {
          updateUser({ name, surname, role });
          setUserData({ name, surname, role });
          setIsLogged(true);
        })
        .finally(() => {
          setIsFetching(false);
        });
      }

      setHasErrors(true)
      
  };

  return { userData, hasErrors, isFetching, handlerSubmit };
};