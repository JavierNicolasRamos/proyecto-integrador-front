import Slider from 'react-slick';
import { Card } from "../components/Card";
import { useGetAllInstruments } from '../hooks/index';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "../styles/ProductCarousel.css";

export const ProductCarousel = () => {

  const { products } = useGetAllInstruments() 

  const settings = {
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
  };

  return (
    <>
      <h2 className="carousel__title">Mejores puntuados</h2>
      <div className="carousel__content">
        <Slider {...settings}>
        {Array.isArray(products.content) && products.content.map((product) => (
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