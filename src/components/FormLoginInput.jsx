import PropTypes from "prop-types";
import "../styles/FormLoginInput.css"
export const FormLoginInput = ({ classname, label, id, type, placeholder, value, handlerChange }) => {

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
    </div>
  )
}

FormLoginInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};