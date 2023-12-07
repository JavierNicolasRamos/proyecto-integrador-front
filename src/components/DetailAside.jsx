import PropTypes from 'prop-types';
import { Button } from './Button'
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/DetailAside.css"
import { CustomCalendar } from './CustomCalendar';
import { useUser } from '../context/UserContext';
import { useEffect } from 'react';

export const DetailAside = ({name, detail /*TODO: Agregar fechas ocupadas */}) => {

  const { id } = useParams();
  const {isLogged} = useUser()
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(navigate)
  //   console.log(history.state)
  //   history.pushState({ name: "Example" }, "pushState example", "page3.html");
  //   console.log(history.state)

  // }, [])
  

  return (
    <aside className="detail-container">
        <div className="detail__instrument-info">
          <h2 className="detail__instrument-name">{name}</h2>
          <p className="detail__instrument-description">{detail}</p>
          
          <div className="detail__instruments-description__disponibility">
            <h3 className="detail__instruments-description__disponibility__title">Disponibilidad</h3>
            <CustomCalendar /* TODO: Pasarle las fechas ocupadas*/ />
            <div className="detail__instruments-description__actions">
              <Button
                route={""}
                text={"Mis reservas"}
                color={"grey"}
              />
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