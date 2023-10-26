
import React, { useState, useEffect } from 'react';
import productos from '../components/Product';
import "../styles/List.css";

const Listado = () => {

  const [productosList, setProductosList] = useState([]);

  useEffect(() => {
    
   
    setProductosList(productos);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>

        </tr>
      </thead>
      <tbody>
        {productosList.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listado;