import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "../components/Card";
import "../styles/Carousel.css";
import "../styles/Card.css";

const ProductCarrusel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8001/instrumentos/paginado', {
          params: {
            page: 0,
            size: 10,
            sort: 'puntuacion,desc', 
          },
        });
        setProducts(response.data.content);
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
    <div>
      <h2 className="carousel__title">Mejores puntuados</h2>
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
    </div>
  );
};

export default ProductCarrusel;