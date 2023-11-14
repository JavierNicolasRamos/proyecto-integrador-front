import { useParams } from 'react-router-dom';
import { useInstrument } from '../hooks/index';
import "../styles/Characteristics.css";

export const Characteristics = () => {
  
  const { id } = useParams();
  const { instrument, instrumentsExists } = useInstrument(id);

  return (
    <div className="characteristics-container">
      {instrumentsExists ? (
        <div className="data-grid">
          <div className="characteristics-card">
            <h2>Caracteristicas</h2>
            <div className="box-detail">
            <div className="column">
                <p>Nombre</p>
                <p>Categoría</p>
                <p>Año de Lanzamiento</p>
              </div>
              <div className="column">
                <p>{instrument.name}</p>
                <p>{instrument.category.name}</p>
                <p>{instrument.uploadDate}</p>
              </div>
              <ul>
                {instrument.characteristics.map((characteristic, index) => (
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