import { useEffect, useState } from "react";
import { loginUser } from "../services/User";
import { useUser } from "../context/UserContext";

export const useLoginUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({
    "name": '', 
    "surname": ''
  })
  const [hasErrors, setHasErrors] = useState(false)
  const { user, updateUser, setIsLogged } = useUser() 

  useEffect(() => {
    updateUser(userData)
    setIsLogged(true)
  }, [userData]); 

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    loginUser(data)
      .then(({name, surname}) => {
        setUserData({
          "name": name,
          "surname": surname
        })
      })
      .catch(() => {
        setHasErrors(true)
      })
    .finally(() => setIsFetching(false)); 
  }    
  return { user, hasErrors, isFetching, handlerSubmit };
};
