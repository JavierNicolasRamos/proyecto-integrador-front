import React from "react";

const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirmation-dialog">
      <div className="dialog-content">
        <p>¿Estás seguro de que deseas eliminar este producto?</p>
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={onConfirm}>Eliminar</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;
