import "../styles/Spinner.css";

const SPINNER_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464013986-404NotFound.svg";
const SPINNER_ALT = "Spinner";

export const Spinner = () => (
  <div className="spinner-container">
    <img src={SPINNER_IMAGE} alt={SPINNER_ALT} className="spinner" />
  </div>
);