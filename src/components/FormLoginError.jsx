import PropTypes from 'prop-types';
import "../styles/FormLoginError.css"

export const FormLoginError = ({message}) => {
  return (
    <p className="form-login__error">{message}</p>
  )
}

FormLoginError.propTypes = {
  message: PropTypes.string.isRequired
}
