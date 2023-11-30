import "../styles/Characteristics.css";
import PropTypes from 'prop-types';
import "../images/share.svg"
import { ShareSocial } from "./ShareSocial";

export const Characteristics = ({characteristics, id, name}) => {

  const apiUrl  = import.meta.env.dev.REACT_APP_URL;

  const url = `${apiUrl}/product/${id}` //TODO: cambiar por la url de producción
  
  return (
    <div className="characteristics-container">
      <div className="characteristics-container__title">
        <h2>Características</h2>
        <ShareSocial shareUrl={url} name={name} /> 
      </div>
      {characteristics.map((characteristic, index) => (
        <div key={index} className="characteristic-container">
          <img className="characteristic__image" src={characteristic.icon}/>
          <p className="characteristic__name">{characteristic.name}</p> 
        </div>
      ))}
    </div>
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}