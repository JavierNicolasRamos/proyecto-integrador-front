import { useEffect, useState } from 'react';
import { Card } from "../components/Card";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Carousel.css";

export const ProductCarrusel = () => {
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
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    centerPadding: '200px',
    prevArrow: <button></button>,
    nextArrow: <button></button>,
  };

  return (
    <>
      <h2 className="carousel__title">Mejores puntuados</h2>
      <div className="carousel__content">
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
    </>
  );
};