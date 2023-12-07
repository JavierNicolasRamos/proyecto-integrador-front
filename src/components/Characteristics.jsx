import PropTypes from 'prop-types';
import { ShareSocial } from "./ShareSocial";
import { useWindowSize } from "../hooks";
import "../styles/Characteristics.css";
import { useState } from 'react';

export const Characteristics = ({characteristics, id, name}) => {

  const apiUrl  = import.meta.env.VITE_APIURL;
  const url = `${apiUrl}/product/${id}` //TODO: cambiar por la url de producción
  const { windowSize } = useWindowSize()
  const [showShare, setShowShare] = useState(false);

  const handlerClick = () => {
    setShowShare(!showShare); // Cambiar el estado al hacer clic
  }
  
  
  return (
    <div className="characteristics-container">
      <div className="characteristics-container__title">
        <h2>Características</h2>
          {
            windowSize.width > 768
            ? <ShareSocial shareUrl={url} name={name} />
            : (
              <div className="characteristics-container__share-div" onClick={handlerClick}>
                <img className="characteristics-container__share-img" src="/src/images/share.svg" alt=""/>
                {showShare && <ShareSocial shareUrl={url} name={name} />}
              </div>
            )
          }
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