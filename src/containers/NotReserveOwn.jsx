import { Button } from "../components"
import "../styles/NotReserveOwn.css"

export const NotReserveOwn = () => {
  return (
    <div className="notReserveOwn">
    <div className="notReserveOwn__container">
      <h3 className="notReserveOwn__title">Si creaste este artículo no podes reservalo!</h3>
      <div className="notReserveOwn__images__container">
        <img src="src/images/to-indicate-right.svg" alt="imagen de persona apuntando a la izquierda" />
        <img src="src/images/to-indicate-left.svg" alt="imagen de persona apuntando a la derecha" />
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
