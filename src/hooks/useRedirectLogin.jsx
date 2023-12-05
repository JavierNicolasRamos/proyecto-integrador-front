import { Navigate } from "react-router-dom"

export const useRedirectLogin = () => {
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

  return { handlerRedirect }
}