import PropTypes from 'prop-types';
import "../styles/FormError.css"

export const FormError = ({ errors }) => {
  return (
    <div className="error-messages">
      {Object.keys(errors).map((key) => (
        <p key={key}><span>{errors[key]}</span></p>
      ))}
    </div>
  );
};

FormError.propTypes = {
  errors: PropTypes.object.isRequired,
};