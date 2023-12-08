import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from './index';
import { useUser } from '../context/UserContext';
import "../styles/Card.css";

export const Card = ({ id, name, image, score, category }) => {
  
  const navigate = useNavigate();
  const { isLogged } = useUser()

  return (
      <Link to={`/product/detail/${id}`}>
    <div className="card">
      <div className="card-img__container">
        {isLogged && <Heart id={id} />}
        <img className="card__image" src={image} alt={name} />
      </div>
      <div className="card__details">
        <h3 className="card__details-name">{name}</h3>
        <p className="card__details-category">{category}</p>
        <p className="card__details-score">⭐ {score}</p>
      </div>
    </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};