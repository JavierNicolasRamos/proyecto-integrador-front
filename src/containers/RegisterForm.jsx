import { useState } from "react";
import { Navigate } from "react-router-dom"
import { usePostUser } from "../hooks/usePostUser";
import { FormRegisterInput, Spinner } from "../components/index";
import "../styles/RegisterForm.css"

export const RegisterForm = () => {

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

  const { handlerSubmit, statusResponse, isFetching, errors } = usePostUser(formData)

  const handlerChange = (e) => {    

    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

  };

  return (
    <>
    <form className="form-register" onSubmit={handlerSubmit} >
      <div className="form-register__content">
          <FormRegisterInput
            label={"Nombre"}
            type={"text"}
            classname={"form-register__name"}
            id={"name"}
            placeholder={"Ej: Juan Pablo"}
            value={formData.name}
            handlerChange={handlerChange}
            error={errors.name || ''}
          />
        <FormRegisterInput
            label={"Apellido"}
            type={"text"}
            classname={"form-register__last-name"}
            id={"surname"}
            placeholder={"Ej: Perez"}
            value={formData.surname}
            handlerChange={handlerChange}
            error={errors.surname || ''}
          />
          <FormRegisterInput
            label={"Email"}
            type={"email"}
            classname={"form-register__email"}
            id={"email"}
            placeholder={"Ej: usuario@gmail.com"}
            value={formData.email}
            handlerChange={handlerChange}
            error={errors.email || ''}
          />
          <FormRegisterInput
            label={"Password"}
            type={"password"}
            classname={"form-register__password"}
            id={"password"}
            placeholder={"*********"}
            value={formData.password}
            handlerChange={handlerChange}
            error={errors.password || ''}
          />
        <div className="form-register__submit">
          {
            isFetching && statusResponse !== 201
            ? <button type="submit">Cargando ...</button> 
            : <button type="submit">Crear Cuenta</button>
          }
          {
            statusResponse === 201 && <Navigate to={"/register/success"} />
          }
        </div>
      </div>
    </form>
    </>
  );
};