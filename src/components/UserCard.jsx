import { useFormPutUserRole } from "../hooks/index";
import {
  ResultConfirmationDialog,
  Spinner,
} from "../components/index";
import "../styles/ListCard.css";

export const UserCard = ({ user }) => {
  const {
    userRole,
    handlerSubmit,
    showResult,
    success,
    resultContent,
    isFetching
    } = useFormPutUserRole(user);


  return (
    <div>
      <div className="listCard">
        <div className="product-list-name user-name">{`${user.surname}, ${user.name}`}</div>
        <div className="product-list-name user-email">{user.email}</div>
        <div className="product-list-name user-role">{user.userRole}</div>
        <div className="productListButtons">
          <button
            className="productListUpdateBtn changeRolBtn"
            onClick={() => {
              handlerSubmit(); 
            }}
          >
            Convertir en {userRole === "ADMIN" ? "USER" : "ADMIN"}
          </button>
        </div>
      </div>
      <div className="putForm">
      {isFetching && <Spinner />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/user/list"}
          />
        )}
      </div>
    </div>
  );
};
