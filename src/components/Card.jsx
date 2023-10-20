
import "./Card.css";
import { Link } from 'react-router-dom';

import React from 'react';

const Card = ({ producto }) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
       <Link to={`/product/detail/${producto.id}`} className="button-link">
            Detalles del Producto
          </Link>
    </div>
  );
};
         
      

export default Card;