import { createContext, useContext, useState } from "react";

// Creamos el contexto
const UserContext = createContext()

//Definimos el proveedor del contexto
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  // Definimos estados
  const [user, setUser] = useState({});

  const [isLogged, setIsLogged] = useState(false)

  // Definimos funciones para actualizar el estado
  const updateUser = (user) => {
    setUser(user);
  };

  // Creamos el objeto con los datos y funciones proporcionados a los componentes hijos
  const userValue = {
    user,
    isLogged,
    setIsLogged,
    updateUser,
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