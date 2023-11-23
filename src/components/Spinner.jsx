import "../styles/Spinner.css";

const SPINNER_IMAGE = "/src/images/404NotFound.svg";
const SPINNER_ALT = "Spinner";

export const Spinner = () => (
  <div className="spinner-container">
    <img src={SPINNER_IMAGE} alt={SPINNER_ALT} className="spinner" />
  </div>
);