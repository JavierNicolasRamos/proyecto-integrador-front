import { Button } from '../components/Button'
import "../styles/RegisterSuccess.css"
import { Link } from 'react-router-dom'

export const RegisterSuccess = () => {

  return (
    <>
      <div className="success">
        <div className="success__container">
          <h3 className="success__title">Tu cuenta fue creada con éxito!</h3>
          <p className="success__subtitle">Por favor revisa tu casilla de correo</p>
          <img className="success__img" src="/src/images/success-register.svg" alt="Imagen de musico" />
          <Button 
            text={"Iniciar Sesión"}
            route={"/login"}
            color={"red"}
          />
          <p className="success__information">No recibiste mail de confirmación? <span className="success__change-email"><Link to={"/register/success/changeEmail"}>Reenviar correo de confirmacion</Link></span></p>
        </div>
      </div>
  </>
  )
}
