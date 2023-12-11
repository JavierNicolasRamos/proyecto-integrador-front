import "../styles/ReservationSuccess.css"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

export const ReservationSuccess = () => {
  return (
    <div className="reservation-success">
      <div className="reservation-success__container">
        <h3 className="reservation-success__title">Tu reserva fue realizada con éxito!</h3>
        <Link className="reservation-success__subtitle" to={"/policyBlock"}>No olvides revisar nuestras políticas de productos</Link>
        <div className="reservation-success__images__container">
          <img src="/src/images/success-man.svg" alt="imagen de personal de seguridad izquierda" />
          <img src="/src/images/success-woman.svg" alt="imagen de personal de seguridad derecha" />
        </div>
        <Button
          text={"Mis reservas"}
          route={"/account"}
          color={"red"}
        />
      </div>
    </div>
  )
}