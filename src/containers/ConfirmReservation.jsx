import { useInstrument } from "../hooks"
import { useParams } from 'react-router-dom';
import "../styles/ConfirmReservation.css"

export const ConfirmReservation = () => {

  const { id } = useParams();
  const { instrument } = useInstrument(id)
  const { name, detail, image } = instrument

  return (
    <div className="reservation">
      <div className="reservation__container">
        <h3 className="reservation__title">Confirmación de reserva</h3>
        <div className="reservation__user-info">
          <div className="reservation__user-name">
            <h4>Nombre:</h4>
            <p>{}</p>
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
              <img src={image} alt={`Imagen del producto ${name}`} />
              <p>{name}</p>
            </div>
          </div>

          <div className="reservation__instrument-detail">
            <h4>Descripcion</h4>
            <p className="reservation__instrument-detail-text">{detail}</p>
          </div>
        
        
        </div>
        <div>
          <h4>Desde</h4>

          <h4>Hasta</h4>
        </div>
      </div>
    </div>
  )
}
