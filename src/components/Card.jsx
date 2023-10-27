import "../styles/Card.css";
import { Link } from 'react-router-dom';
// import axios from 'axios';
// eslint-disable-next-line react/prop-types
const Card = ({producto}) => {

  // useEffect(() => {
  //   axios.get('URL')
  //     .then(response => {
  //       setProducto(response.data);// ver como esta puesto en el back modificar .data
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener datos:', error);
  //     });
  // }, []);
  // eslint-disable-next-line react/prop-types
  const {id, nombre, precio, imagen } = producto

  return (
    <Link to={`/product/detail/${id}`}>
      <div className="card">
        {/* ver como lo llama en el back */}
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