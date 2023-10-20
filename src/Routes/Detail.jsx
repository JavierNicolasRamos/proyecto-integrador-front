import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../components/Product';
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="detail-container">
      <h2 className="detail-title">Detalle del Producto</h2>
      <div className="product-details">
        <img src={producto.imagen} alt={producto.nombre} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{producto.nombre}</h3>
          <p className="product-description">{producto.descripcion}</p>
          <p className="product-price">Precio: ${producto.precio.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};


export default Detail;