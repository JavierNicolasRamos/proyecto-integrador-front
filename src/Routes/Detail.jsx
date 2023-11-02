import { Link, useParams } from 'react-router-dom';
import "../styles/Detail.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import Caracteristicas from '../components/Caracteristicas';

const Detail = () => {

  const [productExists, setProductExists] = useState(false);
  const [producto, setProducto] = useState({});
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [disponible, setDisponible] = useState(true); // Cambiar a false si no está disponible

  // Parameter URL
  const { id } = useParams();

  useEffect(() => {

    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/instrumentos/${id}`);
        setProducto(response.data);
        setProductExists(true);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, [id, setProductExists, setProducto, setFechaDesde, setFechaHasta, setDisponible]);

  const { nombre, imagen, categoria, detalle,} = producto;

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
    // empiezo a modificar
    // empiezo a modificar
    
    <div>
      {productExists === false ? (
        <div>Producto no encontrado</div>
      ) : (
        <>
        <div className="detail-container">
          <div className="product-details-container">
            <div className="product-info">
              <div>
              <h2 className="product-name">{nombre}</h2>
              <p className="prodcut-description">{categoria.descripcion}</p>
              </div>
              <p className="product-description">{detalle}</p>
              <div className="product-actions">
                <div className="date-input">
                  <label htmlFor="desde">Desde</label>
                  <input type="date" id="desde" className="input-date" />
                </div>
                <div className="date-input">
                  <label htmlFor="hasta">Hasta</label>
                  <input type="date" id="hasta" className="input-date" />
                </div>
                <button className="button-rent" onClick={handleRentClick}>
                  Rentar
                </button>
                <button className="button-cart" onClick={handleAddToCartClick}>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
          <div className="product-image-container">
        <Link to={`/product/gallery/${id}`}>
          <div className="image-wrapper">
            <img src={imagen[0].imagen} alt={nombre} className="product-image" />
            <div className="small-images-container">
              <img src={imagen[1].imagen} alt="Small Image 1" className="small-image" />
              <img src={imagen[2].imagen} alt="Small Image 2" className="small-image" />
              <img src={imagen[3].imagen} alt="Small Image 3" className="LinkToGallery"/>
            </div>
          </div>
        </Link>
        </div>
        </div>
        <h2 className="detail__title">Caracteristicas del producto</h2>
        <Caracteristicas/>
        <Carousel />
        </>
      )} 
    </div>
   
  );
}
export default Detail;