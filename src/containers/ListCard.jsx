import PropTypes from "prop-types";
import { useState } from "react";
import { DeleteConfirmationDialog } from "../components/DeleteConfirmationDialog";
import { PutInstrument } from "./PutInstrument";
import { ResultConfirmationDialog } from "../components";
import { Spinner } from "../components";

import "../styles/ListCard.css";

export const ListCard = ({ id, name, handlerDelete, instrument, isFetching, showResult, success, resultContent }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [openPutForm, setOpenPutForm] = useState(false);

  return (
    <div>
      <div className="listCard">
        <div className="product-list-id">ID - {id}</div>
        <div className="product-list-name">{name}</div>
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
            item={`el instrumento ${name}?`}
          />
        )}
        {isFetching && <Spinner />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/instrument/list"}
          />
        )}
      </div>
      <div className="putForm">
        {openPutForm && <PutInstrument presentInstrument={instrument} />}
      </div>
    </div>
  );
};

// ListCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   instrument: PropTypes.object.isRequired,
//   handlerDelete: PropTypes.function.isRequired,
// };
