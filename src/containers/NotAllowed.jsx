import "../styles/NotAllowed.css"
import { Button } from "../components/Button"
import { useUser } from "../context/UserContext"

export const NotAllowed = () => {

  const {isLogged} = useUser()
  
  return (
    <div className="notAllowed">
      <div className="notAllowed__container">
        <h3 className="notAllowed__title">{`Ingreso solo para ${isLogged ? "administradores" : "usuarios logueados"}`}</h3>
        <div className="notAllowed__images__container">
          <img src="src/images/vip.svg" alt="imagen de personal de seguridad izquierda" />
          <img src="src/images/vip-mid.svg" alt="imagen de banda de ingreso VIP" />
          <img src="src/images/vip.svg" alt="imagen de personal de seguridad derecha" />
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
