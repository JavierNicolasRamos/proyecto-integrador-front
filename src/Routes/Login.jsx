import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { LoginForm } from "../components/index"
import '../styles/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Login = () => {
  return (
    <>
      <div className="login"> 
          <h3 className="login__title">Iniciar Sesion</h3>
        <div className="login__content">
          <LoginForm/>
          <span>OR</span>
          <div className="login__social-buttons">
            <button className="login__social-button-facebook"><FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#ffffff",}} /></button>
            <button className="login__social-button-google"><img src="src/images/gmail.svg" alt="" /></button>
            <button className="login__social-button-twitter"><FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#ffffff",}}/></button>
          </div>
        </div>
      </div>
    </>
  )
}
