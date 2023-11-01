import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8001/instrumentos/${id}')
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Cambia el número de productos que se muestran a la vez
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          {/* Coloca aquí la estructura de tu tarjeta de producto */}
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{product.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;