import "../styles/Card.css";
import { Link } from 'react-router-dom';
// import axios from 'axios';
// eslint-disable-next-line react/prop-types
const Card = ({id, name, image, score, category}) => {

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
         
export default Card