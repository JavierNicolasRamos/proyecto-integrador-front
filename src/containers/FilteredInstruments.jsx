import PropTypes from 'prop-types'
import { Card } from '../components/index'

export const FilteredInstruments = ({instruments}) => {
  
  return (
    <>
      <div className="product-content">
        <div className="product__grid-randomprods">
          {instruments.map(({ id, name, image, score, category, reviewCount }) => (
              <Card 
              key={id} 
              id={id} 
              name={name} 
              image={image[0].image}
              score={score}
              category={category.name}
              reviewCount={reviewCount}
            /> 
          ))}
        </div>
      </div>
    </>
  );
};

FilteredInstruments.propTypes = {
  instruments: PropTypes.array.isRequired,
};