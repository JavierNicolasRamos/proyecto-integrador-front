import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/SearchResultCard.css";

export const SearchResultCard = ({ id, name, image, score }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/product/detail/${id}`);
  };

  return (
    <div className="searchResultCard">
    <div className="searchResultInstrument" onClick={handlerClick} >
      <div className="searchResultNameAndImgContainer">
      <div className="searchResultCardImgContainer">
        <img src={image} alt={name} />
      </div>
      <div className="searchResultCardName">
        {name}
      </div>
      </div>
      <p className="searchResultCardScore">⭐ {score}</p>
    </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
