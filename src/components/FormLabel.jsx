import PropTypes from "prop-types";
import "../styles/FormLabel.css"
import { FormRegisterError } from "../components/index";

export const FormLabel = ({classname, label, id, type, placeholder, value, handlerChange, error}) => {

  return (
    <div className={classname}>
      <label htmlFor={id}>{label}</label>
      <input
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

FormLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};