import { useParams } from 'react-router-dom';
import { useInstrument } from '../hooks/index';
import "../styles/Characteristics.css";

export const Characteristics = () => {
  
  const { id } = useParams();
  const { instrument, instrumentsExists } = useInstrument(id);

  const { name, category, uploadDate, characteristics } = instrument || {};

  return (
    <div className="characteristics-container">
      {instrumentsExists ? (
        <div className="data-grid">
          <div className="characteristics-card">
            <h2>Características</h2>
            <div className="box-detail">
              <div className="column">
                <p>Nombre</p>
                <p>Categoría</p>
                <p>Año de Lanzamiento</p>
              </div>
              <div className="column">
                <p>{name}</p>
                <p>{category?.name}</p>
                <p>{uploadDate}</p>
              </div>
              <ul>
                {characteristics?.map((characteristic, index) => (
                  <li key={index}>{characteristic.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>No se encontró el producto con ID: {id}</div>
      )}
    </div>
  );
};