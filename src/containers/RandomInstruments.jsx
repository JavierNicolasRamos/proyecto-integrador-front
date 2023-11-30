import PropTypes from "prop-types";
import { Card }  from "../components/index";

export const RandomInstruments = ({instruments}) => {
  const isHome = location.pathname === "/home"
  
  return (
    <>
      <div className="product-content">
        <h2 className={`home__title ${isHome ? '' : 'hide'}`}>Productos que pueden interesarte</h2>
        <div className="product__grid-randomprods">
        {instruments.map(({ id, name, image, score, category }) => (
          <Card 
            key={id} 
            id={id} 
            name={name} 
            image={image[0].image}
            score={score}
            category={category.name}   
          />
        ))}
        </div>
      </div>
    </>
  );
};

RandomInstruments.propTypes = {
  instruments: PropTypes.array.isRequired
}