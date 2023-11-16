import PropTypes from "prop-types";
import "../styles/ResultConfirmationDialog.css";

export const ResultConfirmationDialog = ({
  success,
  resultContent,
  showResult
}) => {

  const modalClass = showResult ? "result-modal open" : "result-modal";

  return (
    <div className={modalClass}>
      <div className="result-modal-content">
        {success ? (
          <img src="/src/images/success.svg" alt="success symbol" />
        ) : (
          <img src="/src/images/exclamation.svg" alt="exclamation symbol" />
        )}
        <p>{resultContent}</p>
      </div>
    </div>
  );
};

// ResultConfirmationDialog.propTypes = {
//   success: PropTypes.bool.isRequired,
//   resultContent: PropTypes.string.isRequired,
// };
