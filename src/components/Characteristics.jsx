import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/Caracteristicas.css";

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
    <div className="caracteristicas-container">
      {productExists ? (
        <div className="data-grid">
          <div className="caracteristicas-card">
            <h2>Caracteristicas</h2>
            <p>Nombre {producto.name}</p>
            <p>Categoría {producto.category.name}</p>
            <p>Año de Lanzamiento {producto.uploadDate}</p>
            <ul>
              {producto.characteristics.map((characteristic, index) => (
                <li key={index}>{characteristic.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>No se encontró el producto con ID: {id}</div>
      )}
    </div>
  );
};