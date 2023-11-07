import "../styles/Card.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Card = ({id, name, image, score, category}) => {

  return (
    <Link to={`/product/detail/${id}`}>
      <div className="card">
        <img className="card__image" src={image} alt={name} />
        <div className="card__details">
          <h3 className="card__details-name">{name}</h3>
          <p className="card__details-category">{category}</p>
          <p className="card__details-score">⭐ {score}</p>
        </div>
      </div>
    </Link>
  )
}