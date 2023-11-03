import React from "react";
import "../styles/DeleteConfirmationDialog.css"; 

const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  const modalClass = isOpen ? "confirmation-dialog open" : "confirmation-dialog";

  return (
    <div className={modalClass}>
      <div className="dialog-content">
        <img src="/src/images/exclamation.svg" alt="exclamation symbol" />
        <p>¿Estás seguro de que deseas eliminar este producto?</p>
        <div className="dialog-content-buttons">
        <button className="cancelDeleteBtn" onClick={onCancel}>Cancelar</button>
        <button className="confirmDeleteBtn"  onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;
