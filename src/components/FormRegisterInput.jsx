import PropTypes from "prop-types";
import { FormRegisterError } from "./index";
import "../styles/FormRegisterInput.css"

export const FormRegisterInput = ({classname, label, id, type, placeholder, value, handlerChange, error}) => {
  return (
    <div className={classname}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${error ? "invalid" : ""}`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handlerChange}
      />
      { error &&
        <FormRegisterError 
          message={error}
        />
      }
    </div>
  )
}

FormRegisterInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};