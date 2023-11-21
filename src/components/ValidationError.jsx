import "../styles/ValidationError.css";

const ERROR_MESSAGE = "Por favor chequea que la información sea correcta";

export const ValidationError = () => (
  <div className="ValidationError">
    <p>{ERROR_MESSAGE}</p>
  </div>
);