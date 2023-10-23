import { useParams } from 'react-router-dom';
import productos from '../components/Product';
import "../styles/Detail.css";
import { useState, useEffect } from 'react';

const Detail = () => {

  const [productExists, setProductExists] = useState(false);
  const [producto, setProducto] = useState({});
  
  // Parameter URL
  const { id } = useParams();

  useEffect(() => {
    // Realiza la búsqueda del producto cuando el componente se monta
    const foundProduct = productos.find(producto => producto.id == id);
    if (foundProduct) {
      setProducto(foundProduct);
      setProductExists(true);
    }
  }, [id]);

  const { nombre, imagen, precio, descripcion } = producto;

  return (
    <div className="detail-container">
      {productExists === false ? (
        <div>Producto no encontrado</div>
      ) : (
        <>
          <h2 className="detail-title">Detalle del Producto</h2>
          <div className="product-details">
            <img src={imagen} alt={nombre} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{nombre}</h3>
              <p className="product-description">{descripcion}</p>
              <p className="product-price">Precio: ${precio}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;