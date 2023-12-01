import { createContext, useContext, useEffect, useState } from "react";
// import { useAvatar } from "../hooks";

// Creamos el contexto
const UserContext = createContext()

//Definimos el proveedor del contexto
export const UserProvider = ({ children }) => {
  // Definimos estados
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

  // Definimos funciones para actualizar el estado
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

  // Creamos el objeto con los datos y funciones proporcionados a los componentes hijos
  const userValue = {
    user,
    isLogged,
    avatar,
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