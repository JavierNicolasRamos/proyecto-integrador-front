import PropTypes from "prop-types";
import "../styles/ResultConfirmationDialog.css";

export const ResultConfirmationDialog = ({
  success,
  resultContent,
  actionDetail,
  presentRoute,
}) => {
  return (
    <div className="result-modal">
      <div className="result-modal-content">
        {success ? (
          <img src="/src/images/success.svg" alt="success symbol" />
        ) : (
          <img src="/src/images/exclamation.svg" alt="exclamation symbol" />
        )}
        <p>{resultContent}</p>
        <div className="result-modal-content-buttons">
            <a className="presentRouteBtn" href={presentRoute}>{actionDetail}</a>
            <a className="linkToAdminBton" href={"/admin"}> Volver al panel de Administración</a>
        </div>
      </div>
    </div>
  );
};

ResultConfirmationDialog.propTypes = {
  success: PropTypes.bool.isRequired,
  resultContent: PropTypes.string.isRequired,
};
