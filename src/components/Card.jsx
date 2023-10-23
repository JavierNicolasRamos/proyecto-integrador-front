import "../styles/Card.css";
import { Link } from 'react-router-dom';

const Card = ({producto}) => {

  const {id, nombre, descripcion, precio, imagen } = producto

  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio:{precio}</p>
      <Link to={`/product/detail/${id}`} className="button-link">
        Detalles del Producto
      </Link>
    </div>
  )
}
         
export default Card