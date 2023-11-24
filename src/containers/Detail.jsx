import { useParams } from 'react-router-dom';
import { useInstrument } from '../hooks';
import { DetailImageWrapper, ProductCarousel } from '../containers/index';
import { Characteristics, DetailAside } from '../components/index';
import { useNavigate } from "react-router-dom";
import "../styles/Detail.css"

export const Detail = () => {

  const { id } = useParams();
  const { instrument, isFetching } = useInstrument(id);
  const { name, detail, image, category, uploadDate, characteristics} = instrument
  let navigate = useNavigate();

  const handlerBackHome = () => {
    navigate("/home")
  }

  return (
    <>
      {isFetching ? (
        <p>CARGANDO</p>
      ) : (
        <>
          <div className="home-button"
            onClick={handlerBackHome}>
            <img src="/src/images/backArrow.svg" alt="Flecha para volver hacia atras" />
            <p>Volver atrás</p>
          </div>
          <div className="detail-product__container">
            <DetailAside 
              name={name} 
              detail={detail}
            />
            <DetailImageWrapper
              id={instrument.id} 
              name={name} 
              image={image}
            />
          </div>
            <Characteristics 
              id={id} 
              name={name} 
              category={category}
              uploadDate={uploadDate}
              characteristics={characteristics}
            />
        </>
      )}
      <ProductCarousel/>
    </>
  );
};