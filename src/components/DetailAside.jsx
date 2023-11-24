import PropTypes from 'prop-types';
import { Button } from './Button'
import "../styles/DetailAside.css"

export const DetailAside = ({name, detail}) => {

  return (
    <aside className="detail-container">
        <div className="detail__instrument-info">
          <h2 className="detail__instrument-name">{name}</h2>
          <p className="detail__instrument-description">{detail}</p>
          
          <div className="product-actions">
            <div className="date-input">
              <label htmlFor="desde">Desde</label>
              <input type="date" id="desde" className="input-date" />
            </div>
            <div className="date-input">
              <label htmlFor="hasta">Hasta</label>
              <input type="date" id="hasta" className="input-date" />
            </div>
            <Button
              route={""}
              text={"Rentar"}
            />
            <Button
              route={""}
              text={"Agregar al carrito"}
            />
          </div>
      </div>
    </aside>
  )
}

DetailAside.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}