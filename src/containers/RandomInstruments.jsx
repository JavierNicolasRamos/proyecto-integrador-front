import PropTypes from "prop-types";
import { Card }  from "../components/index";

export const RandomInstruments = ({instruments, title}) => {
  const isHome = location.pathname === "/home"
  
  return (
    <>
      <div className="product-content">
        <h2 className={`home__title ${isHome ? '' : 'hide'}`}>{title}</h2>
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

RandomInstruments.propTypes = {
  instruments: PropTypes.array.isRequired
}