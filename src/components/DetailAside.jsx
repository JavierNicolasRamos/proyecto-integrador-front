import PropTypes from 'prop-types';
import { Button } from './Button'
import "../styles/DetailAside.css"
import { CustomCalendar } from './CustomCalendar';

export const DetailAside = ({name, detail}) => {

  return (
    <aside className="detail-container">
        <div className="detail__instrument-info">
          <h2 className="detail__instrument-name">{name}</h2>
          <p className="detail__instrument-description">{detail}</p>
          
          <div className="detail__instruments-description__disponibility">
            <h3 className="detail__instruments-description__disponibility__title">Disponibilidad</h3>
            <CustomCalendar />
            {/* <Button
              route={""}
              text={"Rentar"}
            />
            <Button
              route={""}
              text={"Agregar al carrito"}
            /> */}
          </div>
      </div>
    </aside>
  )
}

DetailAside.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}