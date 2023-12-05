import { useUser } from "../context/UserContext"
import { useInstrument } from "../hooks"
import { useParams } from 'react-router-dom';
import "../styles/ConfirmReservation.css"

export const ConfirmReservation = () => {

  const { id } = useParams();
  const { user } = useUser()
  const { instrument } = useInstrument(id)
  console.log(instrument)
  const {name, detail } = instrument

  return (
    <div className="reservation">
    <div className="reservation__container">
      <h3 className="reservation__title">Confirmación de reserva</h3>
      <div className="reservation__user-info">
        <div className="reservation__user-name">
          <p>Nombre:</p>
          <p>{user.name}</p>
        </div>
        <div className="reservation__user-email">
          <p>Correo:</p>
          <p>{sessionStorage.getItem("email")}</p>
        </div>
      </div>
      <div className="reservation__instrument-info">
        <div className="reservation__instrument-info__container">
          <p>Producto</p>
          <div className="reservation__instrument-name">
            <img alt={`Imagen del producto ${name}`} />
            <p>{name}</p>
          </div>
        </div>
        <div className="reservation__instrument-detail">
          <p>Descripcion</p>
          <p className="reservation__instrument-detail-text">{detail}</p>
        </div>
        </div>
      </div>
    </div>
  )
}
