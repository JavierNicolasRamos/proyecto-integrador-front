import { useResendRegisterEmail } from "../hooks"
import { FormRegisterError } from "./FormRegisterError";
import "../styles/ChangeEmail.css"
import { useEffect, useState } from "react";

export const ChangeEmail = () => {

  const { handlerSubmitEmail, email, setEmail, error, isFetching, sendSuccess } = useResendRegisterEmail()

  const handlerChange = (e) => {    
    setEmail(e.target.value)
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    if (sendSuccess) {
      setShowSuccessMessage(true)
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000)
      return () => clearTimeout(timer);
    }
  }, [sendSuccess]);
  
  return (
    <>
      <div className="change-email">
        <div className="change-email__container">
          <h3 className="change-email__title">Ingresá tu mail </h3>
          <form className="change-email__form" onSubmit={handlerSubmitEmail}>
            <input type="email" value={email} placeholder="tucorreo@gmail.com" onChange={ handlerChange }/>
            {showSuccessMessage && (
              <p className="change-email__form-success">
                Email enviado con éxito
              </p>
            )}
            <FormRegisterError
              message={error}
            />
            <p className="change-email__form-information">{ isFetching ? "Reenviando email" : "El correo de confirmación se enviará a esta casilla de correo"}</p>
            <button className="btn" type="submit">{ isFetching ? "Reenviando..." : "Enviado"}</button>
          </form>
        </div>
      </div>
  </>
  )
}
