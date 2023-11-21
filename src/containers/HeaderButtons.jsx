import "../styles/HeaderButtons.css"
import { useEffect, useState } from 'react';
import { Button } from '../components/Button';

export const HeaderButtons = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      { windowWidth < 768
        ? <img className="header__user-menu" src="src/images/user.svg" alt="Menu"/> 
        : <div className="header__action-buttons">
            <Button
              text={"Registrarse"}
            />
            <Button
              text={"Iniciar sesión"}
            />
          </div>
      } 
    </>
  )
}
