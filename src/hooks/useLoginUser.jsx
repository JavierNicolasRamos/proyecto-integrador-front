import { useState } from "react";
import { loginUser } from "../services/User";
import { useUser } from "../context/UserContext";

export const useLoginUser = (data) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [userData, setUserData] = useState({})
  const [hasErrors, setHasErrors] = useState(false)
  const { user, updateUser } = useUser()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(data)
    .then((data) => 
        setUserData(data), 
        updateUser(userData), 
        setIsFetching(false),
      )
      .catch(() => {
        setHasErrors(true)
      })
    .finally(() => setIsFetching(false));
  }    
  return { user, hasErrors, isFetching, handleSubmit };
};
