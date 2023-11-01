import React from "react";
import "../styles/ListCard.css";

const ListCard = ({ id, name, handleUpdate, handleDelete }) => {
  return (
    <div className="listcard">
      <div className="productListId">ID - {id}</div>
      <div className="productListName">
        {name}
      </div>
      <div className="productListButtons">
        <button className="productListUpdateBtn">Editar</button>
        <button className="productListDeleteBtn">Eliminar</button>
      </div>
    </div>
  );
};

export default ListCard;
