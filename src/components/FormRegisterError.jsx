import "../styles/FormRegisterError.css"

export const FormRegisterError = ({message}) => {
  return (
    <>
    {console.log(message)}
      { message === undefined || null
        ? ''
        : <p className="form-register__error">{message}</p>
      }
    </>
  )
}
