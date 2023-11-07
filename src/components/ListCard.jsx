import { useState } from "react";
import "../styles/ListCard.css";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

// eslint-disable-next-line react/prop-types
export const ListCard = ({ id, name, handleUpdate, handleDelete, fetchProducts }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleUpdateClick = () => {
    handleUpdate(id);
  };

  const handleDeleteClick = () => {
    setIsConfirmationOpen(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmationOpen(false);
  };

  const handleConfirmDelete = () => {
    handleDelete(id);
    setIsConfirmationOpen(false);
    fetchProducts();
  };


  return (
    <div className="listcard">
      <div className="productListId">ID - {id}</div>
      <div className="productListName">{name}</div>
      <div className="productListButtons">
        <button className="productListUpdateBtn" onClick={handleUpdateClick}>
          Editar
        </button>
        <button className="productListDeleteBtn" onClick={handleDeleteClick}>
          Eliminar
        </button>
      </div>
      {isConfirmationOpen && (
        <DeleteConfirmationDialog
          isOpen={isConfirmationOpen}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          item={"este instrumento"}
        />
      )}
    </div>
  );
};