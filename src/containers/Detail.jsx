import { useParams } from 'react-router-dom';
import { ProductCarousel } from './index';
import { useInstrument } from '../hooks';
import { DetailAside } from '../components/DetailAside';
import { DetailImageWrapper } from './DetailImageWrapper';

import "../styles/Detail.css"
import { Characteristics } from '../components';

export const Detail = () => {
  const { id } = useParams();
  const { instrument, instrumentsExists, isFetching } = useInstrument(id);
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
