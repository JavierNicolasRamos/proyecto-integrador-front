import "../styles/Card.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({producto}) => {

  // eslint-disable-next-line react/prop-types
  const {id, nombre, descripcion, precio, imagen } = producto

  return (
    <div className="card">
      <img className="card__image" src={imagen} alt={nombre} />
      <div className="card__details">
        <h3 className="card__details-name">{nombre}</h3>
        <p className="card__details-description">{descripcion}</p>
        <div className="card__details-price">
          <p className="card__details-price-cost">Precio: <span>${precio}</span></p>
          <Link to={`/product/detail/${id}`} className="card__details-link">
            Mas detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
         
export default Card