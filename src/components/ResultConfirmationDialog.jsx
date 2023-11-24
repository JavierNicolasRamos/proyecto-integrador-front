import PropTypes from "prop-types";
import "../styles/ResultConfirmationDialog.css";

const SUCCESS_IMAGE = "/src/images/success.svg";
const EXCLAMATION_IMAGE = "/src/images/exclamation.svg";
const SUCCESS_ALT = "success symbol";
const EXCLAMATION_ALT = "exclamation symbol";

export const ResultConfirmationDialog = ({
  success,
  resultContent,
  actionDetail,
  presentRoute,
}) => (
  <div className="result-modal">
    <div className="result-modal-content">
      {success ? (
        <img src={SUCCESS_IMAGE} alt={SUCCESS_ALT} />
      ) : (
        <img src={EXCLAMATION_IMAGE} alt={EXCLAMATION_ALT} />
      )}
      <p>{resultContent}</p>
      <div className="result-modal-content-buttons">
        <a className="presentRouteBtn" href={presentRoute}>{actionDetail}</a>
        <a className="linkToAdminBtn" href={"/admin"}> Volver al panel de Administración</a>
      </div>
    </div>
  </div>
);

ResultConfirmationDialog.propTypes = {
  success: PropTypes.bool.isRequired,
  resultContent: PropTypes.string.isRequired,
  actionDetail: PropTypes.string.isRequired ,
  presentRoute: PropTypes.string.isRequired,
};