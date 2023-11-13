import PropTypes from 'prop-types';

export const FilteredInstruments = ({instruments}) => {

  return (
    <>
      <div className="product-content">
        <div className="product__grid-randomprods">
          {instruments.map(({ id, name, image, score, category }) => (
            console.log(id, name, image, score, category)
          ))}
        </div>
      </div>
    </>
  );
};

FilteredInstruments.propTypes = {
  instruments: PropTypes.array.isRequired,
};