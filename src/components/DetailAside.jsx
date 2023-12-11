import PropTypes from 'prop-types';
import { Button } from './Button'
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { RangeCalendar } from '../components/index';
import "../styles/DetailAside.css"

export const DetailAside = ({ name, detail }) => {

  const { id } = useParams();
  const {isLogged} = useUser()

  return (
    <aside className="detail-container">
        <div className="detail__instrument-info">
          <h2 className="detail__instrument-name">{name}</h2>
          <p className="detail__instrument-description">{detail}</p>
          <div className="detail__instruments-description__disponibility">
            <h3 className="detail__instruments-description__disponibility__title">Disponibilidad</h3>
            <div>
              <RangeCalendar id={id} size={300} fontSize={20}/>
            </div>
            <div className="detail__instruments-description__actions">
              <Button
                route={ isLogged ? `/product/confirmReservation/${id}` : '/login'}
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