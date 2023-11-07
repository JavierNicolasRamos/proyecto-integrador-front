import PropTypes from 'prop-types';

export const FormError = ({ errors }) => {
  return (
    <div className="error-messages">
      {Object.keys(errors).map((key) => (
        <p key={key}>{errors[key]}</p>
      ))}
    </div>
  );
};

FormError.propTypes = {
  errors: PropTypes.object.isRequired,
};