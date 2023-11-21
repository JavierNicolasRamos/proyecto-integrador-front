import PropTypes from 'prop-types';
import "../styles/NotFound.css";

const IMAGE_URL = "/src/images/404NotFound.svg";
const ALT_TEXT = "Error";

export const NotFound = ({ code, text }) => (
  <div className="NotFound">
    <img src={IMAGE_URL} alt={ALT_TEXT} />
    <h1>#{code}</h1>
    <h1>{text}</h1>
  </div>
);

NotFound.propTypes = {
  code: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};