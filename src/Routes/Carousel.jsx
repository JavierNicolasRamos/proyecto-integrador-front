import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../components/Card'; 
import "../styles/Carousel.css"

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8001/instrumentos', {
          params: {
            page: 1,
            size: 4,
            sort: 'nombre',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
    prevArrow: <button></button>,
    nextArrow: <button></button>,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.nombre}
          image={product.imagen[0].imagen}
          score={product.puntuacion}
          category={product.categoria.descripcion}
        />
      ))}
    </Slider>
  );
};
export default Carousel;


