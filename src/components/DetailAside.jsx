import PropTypes from 'prop-types';
import { Button } from './Button'
import { useParams } from 'react-router-dom';
import "../styles/DetailAside.css"
import { CustomRangeCalendar } from '../components/index';

export const DetailAside = ({name, detail /*TODO: Agregar fechas ocupadas */}) => {

  const { id } = useParams();
  console.log(id)

  return (
    <aside className="detail-container">
        <div className="detail__instrument-info">
          <h2 className="detail__instrument-name">{name}</h2>
          <p className="detail__instrument-description">{detail}</p>
          
          <div className="detail__instruments-description__disponibility">
            <h3 className="detail__instruments-description__disponibility__title">Disponibilidad</h3>
            <CustomRangeCalendar /* TODO: Pasarle las fechas ocupadas*/ />
            <div className="detail__instruments-description__actions">
              <Button
                route={""}
                text={"Mis reservas"}
                color={"grey"}
              />
              <Button
                route={`/product/confirmReservation/${id}`}
                text={"Reservar"}
                color={"red"}
              />
            </div>
          </div>
      </div>
    </aside>
  )
}

DetailAside.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}