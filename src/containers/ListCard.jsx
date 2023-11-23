import PropTypes from 'prop-types';
import { useState } from "react";
import { DeleteConfirmationDialog } from "../components/DeleteConfirmationDialog";
import { PutInstrument } from './PutInstrument';
import "../styles/ListCard.css";

export const ListCard = ({ id, name, handlerDelete, instrument }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [openPutForm, setOpenPutForm] = useState(false);

  const toggleConfirmation = () => {
    setIsConfirmationOpen(!isConfirmationOpen);
  };

  const togglePutForm = () => {
    setOpenPutForm(!openPutForm);
  };

  return (
    <div>
      <div className="list-card">
        <div className="product-list-id">ID - {id}</div>
        <div className="product-list-name">{name}</div>
        <div className="product-list-buttons">
          <button className="product-list-update-btn" onClick={togglePutForm}>
            Editar
          </button>
          <button className="product-list-delete-btn" onClick={toggleConfirmation}>
            Eliminar
          </button>
        </div>
        {isConfirmationOpen && (
          <DeleteConfirmationDialog
            isOpen={isConfirmationOpen}
            onCancel={toggleConfirmation}
            onConfirm={() => {
              handlerDelete(id);
              toggleConfirmation();
            }}
            item={"este instrumento"}
          />
        )}
      </div>
      <div className="put-form">
        {openPutForm && <PutInstrument instrument={instrument} />}
      </div>
    </div>
  );
};

ListCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handlerDelete: PropTypes.func.isRequired,
  instrument: PropTypes.object.isRequired,
};