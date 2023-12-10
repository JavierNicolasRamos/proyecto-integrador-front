import PropTypes from 'prop-types';
import "../styles/DeleteConfirmationDialog.css"; 

export const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm, item }) => {
  return (
    <div className={`confirmation-dialog ${isOpen ? "open" : ""}`}>
      <div className="dialog-content">
        <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464017280-exclamation.svg" alt="exclamation symbol" />
        <p>¿Estás seguro de que deseas eliminar {item}</p>
        <div className="dialog-content-buttons">
          <button className="cancelDeleteBtn" onClick={onCancel}>Cancelar</button>
          <button className="confirmDeleteBtn" onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

// DeleteConfirmationDialog.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onCancel: PropTypes.func.isRequired,
//   onConfirm: PropTypes.func.isRequired,
//   item: PropTypes.string.isRequired,
// };