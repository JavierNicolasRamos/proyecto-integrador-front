import { Link } from 'react-router-dom'
import "../styles/HeaderButtons.css"

export const HeaderButtons = () => {
  return (
    <div className="header__action-buttons">
      <Link to={"/register"}>
        <button className="header__action-button-register btn">
          Registrarse
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="header__action-button-login btn">
          Iniciar sesión
        </button>
      </Link>
    </div>
  )
}
