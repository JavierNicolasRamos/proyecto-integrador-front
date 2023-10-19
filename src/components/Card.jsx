// empiezo a modificar
import React from 'react';
import productos from "../components/Product";
import "./Card.css";
import { Link } from 'react-router-dom';



const Card = () => {
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <div className="card" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio.toFixed(2)}</p>
          <Link to={`/product/detail/${producto.id}`} id={producto.id}  className="button-link">Detalles del Producto</Link>
        </div>
      ))}
    </div>
  );
};
export default Card;