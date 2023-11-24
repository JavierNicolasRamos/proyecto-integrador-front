import "../styles/Characteristics.css";
import PropTypes from 'prop-types';
import "../images/share.svg"
import { ShareSocial } from "./ShareSocial";

export const Characteristics = ({characteristics}) => {

  return (
    <div className="characteristics-container">
      <div className="characteristics-container__title">
        <h2>Caracteristicas</h2>
        <ShareSocial/>
        {/* <img src="/src/images/share.svg" alt="Icono para compartir el producto" /> */}
      </div>
          {characteristics.map((characteristic, index) => (
            <div key={index} className="characteristic-container">
              <img src={characteristic.icon}/>
              <p>{characteristic.name}</p> 
            </div>
          ))}
    </div>
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.array.isRequired,
}