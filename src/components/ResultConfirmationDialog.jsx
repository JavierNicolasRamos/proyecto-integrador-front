import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../styles/ResultConfirmationDialog.css";

const SUCCESS_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464024222-success.svg";
const EXCLAMATION_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464017280-exclamation.svg";
const SUCCESS_ALT = "success symbol";
const EXCLAMATION_ALT = "exclamation symbol";

export const ResultConfirmationDialog = ({
  success,
  resultContent,
  actionDetail,
  presentRoute,
}) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const roleFromSessionStorage = sessionStorage.getItem("role");
    roleFromSessionStorage ? setUserRole(roleFromSessionStorage) : null;
  }, []);

  return (
    <div className="result-modal">
      <div className="result-modal-content">
        {success ? (
          <img src={SUCCESS_IMAGE} alt={SUCCESS_ALT} />
        ) : (
          <img src={EXCLAMATION_IMAGE} alt={EXCLAMATION_ALT} />
        )}
        <p>{resultContent}</p>
        <div className="result-modal-content-buttons">
          <a className="presentRouteBtn" href={presentRoute}>
            {actionDetail}
          </a>
          <a
            className="linkToAdminBtn"
            href={userRole === "USER" ? "/home" : "/admin"}
          >
            {userRole === "USER"
              ? "Volver a la pagina de inicio"
              : "Volver al panel de Administración"}
          </a>
        </div>
      </div>
    </div>
  );
};

ResultConfirmationDialog.propTypes = {
  success: PropTypes.bool.isRequired,
  resultContent: PropTypes.string.isRequired,
  actionDetail: PropTypes.string.isRequired,
  presentRoute: PropTypes.string.isRequired,
};
