import "../styles/ChangeEmail.css"

export const ChangeEmail = () => {

  const handlerClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="change-email">
        <div className="change-email__container">
          <h3 className="change-email__title">Ingresá tu mail </h3>
          <form className="change-email__form" onSubmit={handlerClick}>
            <input type="email" placeholder="tucorreo@gmail.com"/>
            <p className="change-email__form-information">El correo de confirmación se enviará a esta casilla de correo </p>
          <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>
  </>
  )
}
