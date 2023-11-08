import { Link, useParams } from 'react-router-dom';
import "../styles/Detail.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCarrusel } from '../components/ProductCarrusel';
import { Characteristics } from '../components/Characteristics';

export const Detail = () => {
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
        const response = await axios.get(
          `http://localhost:8001/instruments/id/${id}`
        );
        setProducto(response.data);
        setProductExists(true);
      } catch (error) {
        console.error(error);
      }
    };
    getProductById();
  }, [
    id,
    setProductExists,
    setProducto,
    setFechaDesde,
    setFechaHasta,
    setDisponible,
  ]);

  const { name, image, category, detail } = producto;

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
    <div>
      {productExists === false ? (
        <div>Producto no encontrado</div>
      ) : (
        <>
        <div className="detail-container">
          <div className="product-details-container">
            <div className="product-info">
              <div>
                <h2 className="product-name">{name}</h2>
                <p className="prodcut-description">{category.name}</p>
              </div>
              <p className="product-description">{detail}</p>
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
          <div className="image-wrapper">
            <img src={image[0].image} alt={name} className="product-image" />
            <div className="small-images-container">
            <img
              src={image[1].image}
              alt="Small Image 1"
              className="small-image"
            />
            <img
              src={image[2].image}
              alt="Small Image 2"
              className="small-image"
            />
            <Link to={`/product/gallery/${id}`} className="LinkToGallery">
              <img
                src={image[3].image}
                alt="Small Image 3"
                className="small-image small-image-3"
              />
            </Link>
          </div>
          </div>
        
        </div>
        </div>
        <Characteristics/>
        
        <ProductCarrusel/>
        </>
      )} 

    </div>
   
  );
};