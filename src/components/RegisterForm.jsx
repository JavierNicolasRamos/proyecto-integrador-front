
export const RegisterForm = () => {
  return (
    <form className="form-register">
      <div className="form-register__content">
        <div className="form-register__name">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Juan Pablo"/>
        </div>
        <div className="form-register__last-name">
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" placeholder="Perez"/>
        </div>
        <div className="form-register__email">
          <label htmlFor="mail">Mail</label>
          <input type="email" id="mail" placeholder="Usuario@gmail.com"/>
        </div>
        <div className="form-register__password">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="*********"/>
        </div>
        <div className="form-register__bornDate">
          <label htmlFor="bornDate">Fecha de nacimiento</label>
          <input type="date" id="bornDate" placeholder=""/>
        </div>
        <div className="form-register__dni">
          <label htmlFor="dni">DNI</label>
          <input type="number" id="dni" placeholder="11.111.111"/>
        </div>
        <div className="form-register__submit">
          <button type="submit">Crear Cuenta</button>
        </div>
      </div>
    </form>
  )
}
