import PropTypes from 'prop-types';
import "../styles/DeleteConfirmationDialog.css"; 

export const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm, item }) => {
  return (
    <div className={`confirmation-dialog ${isOpen ? "open" : ""}`}>
      <div className="dialog-content">
        <img src="/src/images/exclamation.svg" alt="exclamation symbol" />
        <p>¿Estás seguro de que deseas eliminar {item}?</p>
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