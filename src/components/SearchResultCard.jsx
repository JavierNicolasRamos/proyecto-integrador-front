import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/SearchResultCard.css";

export const SearchResultCard = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/product/detail/${id}`);
  };

  return (
    <div className="searchResultCard">
    <div className="searchResultInstrument" onClick={handlerClick} >
      <div className="searchResultCardImgContainer">
        <img src={image} alt={name} />
      </div>
      <h3 className="searchResultCardName">
        {name}
      </h3>
    </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
