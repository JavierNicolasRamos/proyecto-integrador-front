import { useState } from "react";
import { DeleteConfirmationDialog } from "./DeleteConfirmationDialog";
import { PutCharacteristic } from "../containers/index";
import { ResultConfirmationDialog } from "../components";
import { Spinner } from "../components";
import "../styles/ListCard.css";

export const CharacteristicCard = ({ id, name, handlerDelete, characteristic, isFetching, showResult, success, resultContent }) => {
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
        {isFetching && <Spinner />}
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
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/characteristic/list"}
          />
        )}
      </div>
      <div className="putForm">
        {openPutForm && <PutCharacteristic presentCharacteristic={characteristic} />}
      </div>
    </div>
  );
};

