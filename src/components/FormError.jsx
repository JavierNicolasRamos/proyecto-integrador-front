// eslint-disable-next-line react/prop-types
export const FormError = ({ errors }) => {
  return (
    <div className="error-messages">
      {Object.keys(errors).map((key) => (
        <p key={key}>{errors[key]}</p>
      ))}
    </div>
  );
};