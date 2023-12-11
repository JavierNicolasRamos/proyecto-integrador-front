import { Button } from "../components"
import "../styles/NotReserveOwn.css"

export const NotReserveOwn = () => {
  return (
    <div className="notReserveOwn">
    <div className="notReserveOwn__container">
      <h3 className="notReserveOwn__title">Si creaste este artículo no podes reservalo!</h3>
      <div className="notReserveOwn__images__container">
        <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311508400-to-indicate-right.svg" alt="imagen de persona apuntando a la derecha" />
        <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311507978-to-indicate-left.svg" alt="imagen de persona apuntando a la izquierda" />
      </div>
      <Button
        text={"Volver"}
        route={"/home"}
        color={"red"}
      />
    </div>
  </div>
  )
}
