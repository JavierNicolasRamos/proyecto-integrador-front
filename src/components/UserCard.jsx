import { useState } from "react";
import { PutUserRole } from "../containers/index";
import "../styles/ListCard.css";

export const UserCard = ({ user }) => {
  const [openPutForm, setOpenPutForm] = useState(false);

  return (
    <div>
      <div className="listCard">
        <div className="product-list-id">ID - {user.id}</div>
        <div className="product-list-name user-name">{`${user.name}, ${user.surname}`}</div>
        <div className="product-list-name user-email">{user.email}</div>
        <div className="product-list-name user-role">{user.userRole}</div>
        <div className="productListButtons">
          <button
            className="productListUpdateBtn changeRolBtn"
            onClick={() => {
              setOpenPutForm(true); 
            }}
          >
            Cambiar Rol
          </button>
        </div>
      </div>
      <div className="putForm">
        {openPutForm && (
          <PutUserRole presentUser={user} />
        )}
      </div>
    </div>
  );
};
