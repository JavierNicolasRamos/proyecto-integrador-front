import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { useLocation } from 'react-router-dom';

export const useRedirectLogin = () => {

  const { isLogged } = useUser()
  const location = useLocation()

  const handlerRedirect = (role) =>{
    switch (role) {
      case "USER":
        return <Navigate to={"/home"}/>
      case "ADMIN":
        return <Navigate to={"/admin"}/>
      case "SUPERADMIN":
        return <Navigate to={"/admin"}/>
      default:
        break;
    }
  }

  const handlerUserNotAllowed = () => {
    if (
      (sessionStorage.getItem('role') === "USER" && location.pathname.includes("admin")) || 
      (location.pathname.includes("account") && sessionStorage.getItem('role') === null )
    ) {
      return <Navigate to={"/accessDenied"} />;
    } else {
      return null;
    }
  }

  return { handlerRedirect, handlerUserNotAllowed }
}