import { useState } from "react";
import { validateForm } from "../helpers/validateForm";
import { FormError } from "./FormError";

export const RegisterForm = () => {
  
  //Creamos el objeto del formulario vacio
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mail: "",
    password: "",
    bornDate: "",
    dni: "",
  });

  const [hasErrors, setHasErrors] = useState(false)
  const [errors, setErrors] = useState({})

  //Recuperamos el valor del input para luego poder modificarlo en el objeto
  const handleChange = (e) => {
    
    //Desestrucutramos el id y el valor
    const { id, value } = e.target;
    
    //Colocamos el valor obtenido y lo colocamos en la propiedad correspondiente
    setFormData({
      //Utilizamos el operador spread para que ademas de guardar el dato no se borren los anteriores
      ...formData,
      [id]: value,
    });
  };

  //Manejamos el envio del formulario
  const handleSubmit = (e) => {
  
    //Detenemos el comportamiento por defecto del formulario
    e.preventDefault();

    //Verificamos si hay algun errror en los datos ingresados
    let errors = validateForm(formData)

    //En caso de que haya por lo menos 1 error en el objeto detenemos el envio de informacion
    if(Object.keys(errors).length > 0) {
      setHasErrors(true)
      setErrors(errors)
      return
    }

  };

  return (
    <>
    <form className="form-register" onSubmit={handleSubmit} >
      <div className="form-register__content">
        <div className="form-register__name">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Juan Pablo"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-register__last-name">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            placeholder="Ej: Perez"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-register__email">
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            id="mail"
            placeholder="Ej: Usuario@gmail.com"
            value={formData.mail}
            onChange={handleChange}
            />
        </div>
        <div className="form-register__password">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <div className="form-register__bornDate">
          <label htmlFor="bornDate">Fecha de nacimiento</label>
          <input
            type="date"
            id="bornDate"
            value={formData.bornDate}
            onChange={handleChange}
            />
        </div>
        <div className="form-register__dni">
          <label htmlFor="dni">DNI</label>
          <input
            type="number"
            id="dni"
            placeholder="Ej: 11.111.111"
            value={formData.dni}
            min={0}
            onChange={handleChange}
            />
        </div>
        {hasErrors && <FormError errors={errors}/>}
        <div className="form-register__submit">
          <button type="submit">Crear Cuenta</button>
        </div>
      </div>
    </form>
    </>
  );
};