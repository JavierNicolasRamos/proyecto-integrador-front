import { useParams } from 'react-router-dom';
import { useInstrument } from '../hooks';
import { DetailImageWrapper, ProductCarousel } from './container/index';
import { Characteristics, DetailAside } from '../components/index';
import "../styles/Detail.css"

export const Detail = () => {

  const { id } = useParams();
  const { instrument, isFetching } = useInstrument(id);
  const { name, detail, image, category, uploadDate, characteristics} = instrument

  return (
    <>
      {isFetching ? (
        <p>CARGANDO</p>
      ) : (
        <>
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