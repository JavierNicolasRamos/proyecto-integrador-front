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
                <img className="characteristics-container__share-img" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464023848-share.svg" alt=""/>
                {showShare && <ShareSocial shareUrl={url} name={name} />}
              </div>
            )
          }
      </div>
      <div className="characteristic__container">
        {characteristics.map((characteristic, index) => (
          <div key={index} className="characteristic__info">
            <img className="characteristic__image" src={characteristic.icon}/>
            <p className="characteristic__name">{characteristic.name}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

Characteristics.propTypes = {
  characteristics: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}