import "../styles/ValidationError.css";

const ERROR_MESSAGE = "Por favor chequea que la información sea correcta";

export const ValidationError = ({message}) => (
  <div className="ValidationError">
    <p>{message? message : ERROR_MESSAGE}</p>
  </div>
);