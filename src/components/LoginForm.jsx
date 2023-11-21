import { Link, Navigate } from "react-router-dom"
import { useLoginUser } from "../hooks/useLoginUser"
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const {handleSubmit, isFetching} = useLoginUser(formData)
  const {user} = useUser()
  
  //Recuperamos el valor del input para luego poder modificarlo en el objeto
  const handleChange = (e) => {    
    //Desestrucutramos el id y el valor
    const { id, value } = e.target;
    //Colocamos el valor obtenido y lo colocamos en la propiedad correspondiente
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <form 
      className="form-login"
      onSubmit={handleSubmit}
      >
      <div className="form-login__email">
        <label htmlFor="mail">Mail</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Usuario@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-login__password">
        <label htmlFor="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          placeholder="*********"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-login__buttons">
        { isFetching 
          ? <button type="submit">Entrar</button>
          : <Navigate to={"/home"}/>
        }
        <Link to={"/register"}>
          No tiene cuenta? crear una ahora
        </Link>
      </div>
    </form>
  )
}
