import "../styles/Characteristics.css";
import PropTypes from 'prop-types';
import "../images/share.svg"

export const Characteristics = ({name, category, uploadDate, characteristics}) => {

  return (
    <div className="characteristics-container">
      <div className="characteristics-container__title">
        <h2>Caracteristicas</h2>
        <img src="/src/images/share.svg" alt="Icono para compartir el producto" />
      </div>
        <p>Nombre: {name}</p>
        <p>Categoría: {category.name}</p>
        <p>Año de Lanzamiento: {uploadDate}</p>
        <ul>
          {characteristics.map((characteristic, index) => (
            <li key={index}>{characteristic.name}</li>
          ))}
        </ul>
    </div>
  );
};

Characteristics.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  characteristics: PropTypes.array.isRequired,
  uploadDate: PropTypes.string.isRequired
}