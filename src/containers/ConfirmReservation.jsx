import { useInstrument } from "../hooks"
import { useParams } from 'react-router-dom';
import { useUser } from "../context/UserContext";
import { Button } from "../components/Button";
import "../styles/ConfirmReservation.css"

export const ConfirmReservation = () => {

  const { id } = useParams()
  const { user } = useUser()
  const { instrument, image } = useInstrument(id)

  return (
    <div className="reservation">
      <div className="reservation__container">
        <h3 className="reservation__title">Confirmación de reserva</h3>
        <div className="reservation__user-info">
          <div className="reservation__user-name">
            <h4>Nombre:</h4>
            <p>{user.name} {user.surname}</p>
          </div>
          <div className="reservation__user-email">
            <h4>Correo:</h4>
            <p>{sessionStorage.getItem("email")}</p>
          </div>
        </div>
        <div className="reservation__instrument-info">
          <div className="reservation__instrument-info__container">
            <h4>Producto</h4>
            <div className="reservation__instrument-name">
              <img src={image} alt={`Imagen del producto`} />
              <p>{instrument.name}</p>
            </div>
          </div>
          <div className="reservation__instrument-detail">
            <h4>Descripcion</h4>
            <p className="reservation__instrument-detail-text">{instrument.detail}</p>
          </div>
          <div className="reservation__instrument-date">
            <h4>Desde</h4>
            <p>20/11/2011</p>
            <h4>Hasta</h4>
            <p>20/11/2011</p>
          </div>
        </div>
        <div className="reservatioon__actions-buttons">
          <Button
            text={"Volver"}
            route={`/product/detail/${id}`}
          />
          <Button
            text={"Confirmar"}
            color={"red"}
          />
        </div>
      </div>
    </div>
  )
}
