import { Link } from "react-router-dom";
import { Menu, HeaderProfile } from "../components/index";
import { useWindowSize } from "../hooks/index";
import { HeaderButtons } from "./index";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import "../styles/Header.css";

export const Header = () => {

  const { isLogged } = useUser()
  const { windowSize } = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <section className="phone">
        <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
      </section>

      <header className="header">
        <section className="header__search-bar">
        { 
          windowSize.width <= 768 ? (
          <img
           className="header__hamburger-menu"
           src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464018874-hamburger-menu.svg"
           alt="Menu"
           onClick={() =>
            setShowMenu(!showMenu)
          }
          />
          ) : ('')
        }
        <Link to={"/home"} className="header__search-bar__logo">
          <img className="header__search-bar__img" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1699641383924-LogoMR_2logo.svg" alt="Imagen del logo de music rental" />
        </Link>
          { isLogged
            ? <HeaderProfile />                
            : <HeaderButtons /> 
          }
        </section>
      </header>
      <Menu
       showMenu={showMenu}
      />
    </>
  );
};