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
          <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311507141-success-man.svg" alt="imagen de hombre tocando una guitarra" />
          <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311507557-success-woman.svg" alt="imagen de mujer tocando una guitarra" />
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