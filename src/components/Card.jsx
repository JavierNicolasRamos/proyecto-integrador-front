import "../styles/Card.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({producto}) => {

  // eslint-disable-next-line react/prop-types
  const {id, nombre, precio, imagen } = producto

  return (
    <Link to={`/product/detail/${id}`}>
      <div className="card">
        <img className="card__image" src={imagen} alt={nombre} />
        <div className="card__details">
          <h3 className="card__details-name">{nombre}</h3>
          <div className="card__details-price">${precio}</div>
        </div>
      </div>
    </Link>
  )
}
         
export default Card