import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false)
  const [avatar, setAvatar] = useState()
  
  useEffect(() => {
    checkSession()
  }, [avatar])
  
  const closeSession = () => {
    setIsLogged(false)
    sessionStorage.clear()
    setUser({})
  }

  const updateUser = (user) => {
    setUser(user);
    setIsLogged(true)
  };

  const checkSession = () => {
    if(sessionStorage.getItem('avatar')){
      setAvatar(sessionStorage.getItem('avatar'))
      setIsLogged(true)
    }
  }

  const userValue = {
    user,
    isLogged,
    avatar,
    setAvatar,
    setIsLogged,
    updateUser,
    closeSession,
    checkSession
  };

  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
}

// Creamos un hook personalizado para acceder al contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe utilizarse dentro de un UserProvider');
  }
  return context;
};