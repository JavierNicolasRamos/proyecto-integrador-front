import { useEffect, useState } from 'react';
import { Card } from "./Card";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/ProductCarousel.css";

const API_URL = 'http://localhost:8001/instruments/paginated';
const API_PARAMS = {
  page: 0,
  size: 10,
  sort: 'score,detail',
};

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 1000,
  draggable: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  prevArrow: <button></button>,
  nextArrow: <button></button>,
}

//TODO: llevar a hooks y services
export const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL, { params: API_PARAMS });
        setProducts(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="carousel__title">Mejores puntuados</h2>
      <div className="carousel__content">
        <Slider {...SLIDER_SETTINGS}>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image[0].image}
              score={product.score}
              category={product.category.name}
            />
          ))}
        </Slider>
    </div>
    </>
  );
};