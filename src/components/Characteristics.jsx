import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/index';
import "../styles/Characteristics.css";

export const Characteristics = () => {
  const { id } = useParams();
  const { product, productExists } = useProduct(id);

  return (
    <div className="characteristics-container">
      {productExists ? (
        <div className="data-grid">
          <div className="characteristics-card">
            <h2>Characteristics</h2>
            <div className="box-detail">
            <div className="column">
                <p>Nombre</p>
                <p>Categoría</p>
                <p>Año de Lanzamiento</p>
              </div>
              <div className="column">
                <p>{product.name}</p>
                <p>{product.category.name}</p>
                <p>{product.uploadDate}</p>
              </div>
              <ul>
                {product.characteristics.map((characteristic, index) => (
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