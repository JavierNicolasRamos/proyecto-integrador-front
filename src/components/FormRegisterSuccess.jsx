import "../styles/FormRegisterSuccess.css"

export const FormRegisterSuccess = ({message}) => {
  return (
    <>
      { message && <p className="form-register__success">{message}</p> }
    </>
  )
}
