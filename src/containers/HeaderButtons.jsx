import { Button } from '../components/index';
import { useWindowSize } from '../hooks/index';
import "../styles/HeaderButtons.css"

export const HeaderButtons = () => {

  const { width } = useWindowSize();

  return (
    <>
      { width < 768
        ? <img className="header__user-menu" src="src/images/user.svg" alt="Menu"/> 
        : <div className="header__action-buttons">
            <Button
              text={"Registrarse"}
              route="/register"
            />
            <Button
              text={"Iniciar sesión"}
              route="/login"
            />
          </div>
      } 
    </>
  )
}
