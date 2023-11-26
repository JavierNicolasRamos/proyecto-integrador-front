import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router";
import { DeleteConfirmationDialog } from "./DeleteConfirmationDialog";
import { Spinner } from "./Spinner";
import { ResultConfirmationDialog } from "./ResultConfirmationDialog";
import "../styles/CategoryCard.css";

export const CategoryCard = ({ id, name, image, handlerDelete, isFetching, showResult, success, resultContent }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const location = useLocation().pathname;
  

  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image.image})` : "none",
  };

  return (
    <div className="category-card" style={backgroundImageStyle}>
      ´{location === "/admin/category/list" ? <img className="trash-can"
        src="/src/images/trash-can-regular.svg"
        alt="trash-can"
        onClick={() => {
          setIsConfirmationOpen(!isConfirmationOpen);
        }}
      /> : null}
      <h1>{name}</h1>
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
            item={`la categoría ${name}? Si procedes, los productos pertenecientes a ella quedaran sin ninguna categoría asociada.`}
          />
        )}
        {isFetching && <Spinner />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/category/list"}
          />
        )}
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image: PropTypes.string,
  }),
};
