// import { useParams } from 'react-router-dom';
// import productos from '../components/Product';
// import "../styles/Detail.css";
// import { useState, useEffect } from 'react';

// const Detail = () => {

//   const [productExists, setProductExists] = useState(false);
//   const [producto, setProducto] = useState({});
  
//   // Parameter URL
//   const { id } = useParams();

//   useEffect(() => {
//     // Realiza la búsqueda del producto cuando el componente se monta
//     const foundProduct = productos.find(producto => producto.id == id);
//     if (foundProduct) {
//       setProducto(foundProduct);
//       setProductExists(true);
//     }
//   }, [id]);

//   const { nombre, imagen, precio, descripcion } = producto;

//   return (
//     <div className="detail-container">
//       {productExists === false ? (
//         <div>Producto no encontrado</div>
//       ) : (
//         <>
//           <h2 className="detail-title">Detalle del Producto</h2>
//           <div className="product-details">
//             <img src={imagen} alt={nombre} className="product-image" />
//             <div className="product-info">
//               <h3 className="product-name">{nombre}</h3>
//               <p className="product-description">{descripcion}</p>
//               <p className="product-price">Precio: ${precio}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Detail;
import { useParams } from 'react-router-dom';
import productos from '../components/Product';
import "../styles/Detail.css";
import { useState, useEffect } from 'react';

const Detail = () => {

  const [productExists, setProductExists] = useState(false);
  const [producto, setProducto] = useState({});
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [disponible, setDisponible] = useState(true); // Cambiar a false si no está disponible

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

  const handleRentClick = () => {
    // Lógica para manejar el alquiler
    if (fechaDesde && fechaHasta) {
      // Aquí puedes agregar la lógica para realizar el alquiler
      // Cambiar el estado "disponible" a false si no está disponible para alquilar
    }
  };

  const handleAddToCartClick = () => {
    // Lógica para agregar al carrito
  };

  return (
    <div className="detail-container">
      {productExists === false ? (
        <div>Producto no encontrado</div>
      ) : (
        <>
          <div className="product-details-container">
            <div className="product-info">
              <h2 className="product-name">{nombre}</h2>
              <p className="product-description">{descripcion}</p>
              <div className="product-actions">
                <div className="date-input">
                  <label htmlFor="desde">Desde</label>
                  <input type="date" id="desde" className="input-date" />
                </div>
                <div className="date-input">
                  <label htmlFor="hasta">Hasta</label>
                  <input type="date" id="hasta" className="input-date" />
                </div>
                <button className="button-rent">Rentar</button>
                <button className="button-cart">Agregar al Carrito</button>
              </div>
            </div>
          </div>
          <div className="product-image-container">
            <img src={imagen} alt={nombre} className="product-image" />
          </div>
        </>
      )}
    </div>
  );
}


export default Detail;