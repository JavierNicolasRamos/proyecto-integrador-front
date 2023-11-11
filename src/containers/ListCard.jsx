import PropTypes from 'prop-types';
import { useState } from "react";
import { DeleteConfirmationDialog } from "../components/DeleteConfirmationDialog";
import "../styles/ListCard.css";

//TODO: Falta refactorizar el componente en hooks y servicios
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

ListCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};