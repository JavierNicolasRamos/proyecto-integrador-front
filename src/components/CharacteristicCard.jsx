import { useState } from "react";
import { DeleteConfirmationDialog } from "./DeleteConfirmationDialog";
import { PutCharacteristic } from "../containers/index";
import "../styles/ListCard.css";

export const CharacteristicCard = ({ id, name, handlerDelete, characteristic }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [openPutForm, setOpenPutForm] = useState(false);

  return (
    <div>
      <div className="listCard">
        <div className="product-list-id">ID - {id}</div>
        <img className="CharacteristicIcon" src={characteristic.icon} alt="characteristicIcon" />
        <div className="product-list-name characteristic-name">{name}</div>
        <div className="productListButtons">
          <button
            className="productListUpdateBtn"
            onClick={() => {
              setOpenPutForm(true);
            }}
          >
            Editar
          </button>
          <button
            className="productListDeleteBtn"
            onClick={() => {
              setIsConfirmationOpen(!isConfirmationOpen);
            }}
          >
            Eliminar
          </button>
        </div>
        {isConfirmationOpen && (
          <DeleteConfirmationDialog
            isOpen={isConfirmationOpen}
            onCancel={() => {
              setIsConfirmationOpen(false);
            }}
            onConfirm={() => {
              handlerDelete(id);
              setIsConfirmationOpen(false);
            }}
            item={`la característica ${name}?`}
          />
        )}
      </div>
      <div className="putForm">
        {openPutForm && <PutCharacteristic presentCharacteristic={characteristic} />}
      </div>
    </div>
  );
};

