import { Link } from "react-router-dom"

export const LoginForm = () => {
  return (
    <form className="form-login">
      <div className="form-login__email">
        <label htmlFor="mail">Mail</label>
        <input type="email" id="mail" placeholder="Usuario@gmail.com"/>
      </div>
      <div className="form-login__password">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="*********"/>
      </div>
      <div className="form-login__buttons">
        <button type="submit">Entrar</button>
        <Link to={"/register"}>
          No tiene cuenta? crear una ahora
        </Link>
      </div>
    </form>
  )
}
