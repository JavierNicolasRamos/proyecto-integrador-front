import "../styles/FormRegisterError.css"

export const FormRegisterError = ({message}) => {
  return (
    <>
      { message === undefined || null
        ? ''
        : <p className="form-register__error">{message}</p>
      }
    </>
  )
}
