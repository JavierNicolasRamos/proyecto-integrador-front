import PropTypes from 'prop-types';
import "../styles/NotFound.css";

export const NotFound = ({code, text}) => {
  return (
    <div className="NotFound">
      <img src="/src/images/404NotFound.svg" alt="Error" />
      <h1>#{code}</h1>
      <h1>{text}</h1>
    </div>
  )
};

NotFound.propTypes = {
  code: PropTypes.number,
  text: PropTypes.string,
};