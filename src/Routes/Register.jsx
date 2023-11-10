import { Link } from "react-router-dom"
import { RegisterForm } from "../containers/index"
import "../styles/Register.css"

export const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="register__title">
          <h3>Crear una cuenta</h3>
          <Link to={"/login"}>
            Ya tienes cuenta? Ingresa aquí.
          </Link>
        </div>
        <RegisterForm/>
      </div>
    </div>
  )
}
