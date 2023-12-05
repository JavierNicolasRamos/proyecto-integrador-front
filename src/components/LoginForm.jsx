import { Link, Navigate } from "react-router-dom"
import { useLoginUser } from "../hooks/useLoginUser"
import { useState } from "react";
import { FormLoginError, FormLoginInput, Spinner } from "./index";
import "../styles/LoginForm.css"
import { useRedirectLogin } from "../hooks/useRedirectLogin";

export const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const {handlerSubmit, userData, errors, hasErrors, isFetching} = useLoginUser(formData)
  const { handlerRedirect } = useRedirectLogin()

  const handlerChange = (e) => {    
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <form 
      className="form-login"
        onSubmit={handlerSubmit}
      >
      <FormLoginInput
        label={"Email"}
        type={"email"}
        classname={"form-login__email"}
        id={"email"}
        placeholder={"Ej: usuario@gmail.com"}
        value={formData.email}
        handlerChange={handlerChange}
      />
      <FormLoginInput
        label={"Password"}
        type={"password"}
        classname={"form-login__password"}
        id={"password"}
        placeholder={"*********"}
        value={formData.password}
        handlerChange={handlerChange}
      />
      {
        hasErrors
        ? <FormLoginError 
            message={errors}
          />
        : ''
      }

      <div className="form-login__buttons">
        {
          isFetching 
          ? <Spinner/>
          : <button type="submit">Entrar</button>  
        }
        {
          !hasErrors && handlerRedirect(userData.role)
        }
        <Link to={"/register"}>
          No tiene cuenta? crear una ahora
        </Link>
      </div>
    </form>
  )
}
