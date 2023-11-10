import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/Characteristics.css";

//TODO: Falta refactorizar el componente en hooks y servicios
export const Characteristics = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [productExists, setProductExists] = useState(false);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/instruments/id/${id}`
        );
        setProducto(response.data);
        setProductExists(true);
      } catch (error) {
        console.error(error);
        setProductExists(false);
      }
    };
    getProductById();
  }, [id]);

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
                <p>{producto.name}</p>
                <p>{producto.category.name}</p>
                <p>{producto.uploadDate}</p>
              </div>
              <ul>
                {producto.characteristics.map((characteristic, index) => (
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