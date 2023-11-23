import { useState } from "react";
import { FormError } from "../components/FormError";
import { usePostUser } from "../hooks/usePostUser";

//TODO: Falta refactorizar el componente en hooks y servicios
export const RegisterForm = () => {

  //Creamos el objeto del formulario vacio
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    areaCode: 0,
    prefix: 0,
    phone: 0,
    isMobile: true,
    email: "",
    password: "",
    role: "USER"
  });

  const { handlerSubmit, errors, hasErrors } = usePostUser(formData)

  //Recuperamos el valor del input para luego poder modificarlo en el objeto
  const handlerChange = (e) => {    
    //Desestrucutramos el id y el valor
    const { id, value } = e.target;
    //Colocamos el valor obtenido y lo colocamos en la propiedad correspondiente
    setFormData({
      ...formData,
      [id]: value,
    });
  };


  return (
    <>
    <form className="form-register" onSubmit={handlerSubmit} >
      <div className="form-register__content">
        <div className="form-register__name">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Juan Pablo"
            value={formData.name}
            onChange={handlerChange}
          />
        </div>
        <div className="form-register__last-name">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="surname"
            placeholder="Ej: Perez"
            value={formData.surname}
            onChange={handlerChange}
          />
        </div>
        <div className="form-register__email">
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            id="email"
            placeholder="Ej: Usuario@gmail.com"
            value={formData.email}
            onChange={handlerChange}
            />
        </div>
        <div className="form-register__password">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handlerChange}
            />
        </div>
        {hasErrors && <FormError errors={errors}/>}
        <div className="form-register__submit">
          <button 
            type="submit"
            >
            Crear Cuenta
          </button>
        </div>
      </div>
    </form>
    </>
  );
};