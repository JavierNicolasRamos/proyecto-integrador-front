import { Button } from '../components/index';
import { useWindowSize } from '../hooks/index';
import "../styles/HeaderButtons.css"

export const HeaderButtons = () => {

  const { width } = useWindowSize();

  return (
    <>
      { width < 768
        ? <img className="header__user-menu" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464025713-user.svg" alt="Menu"/> 
        : <div className="header__action-buttons">
            <Button
              text={"Registrarse"}
              route={"/register"}
              color={""}
            />
            <Button
              text={"Iniciar sesión"}
              route={"/login"}
              color={""}
            />
          </div>
      } 
    </>
  )
}
