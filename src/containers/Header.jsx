import { Link, useLocation } from "react-router-dom";
import { Menu, HeaderProfile, MobileSearchBar, SearchForm } from "../components/index";
import { useWindowSize } from "../hooks/index";
import { HeaderButtons } from "./index";
import { useUser } from "../context/UserContext";
import "../styles/Header.css";
import { useState } from "react";

export const Header = () => {

  const location = useLocation()
  const { isLogged } = useUser()
  const { width } = useWindowSize()
  const isHome = location.pathname === "/home"
  const [showMenu, setShowMenu] = useState(false)


  return (
    <>
      {
        isHome
        ? <section className="phone">
            <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
          </section>
        : ''
      }
      
      <header className={`header ${!isHome ? 'hide' : ''}`}>
        <section className="header__search-bar">

        { width < 768 ? 
          <img className="header__hamburger-menu" src="src/images/hamburger-menu.svg" alt="Menu"/> : ''
        }

        <Link to={"/home"} className="header__search-bar__logo">
          <img className="header__search-bar__img" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1699641383924-LogoMR_2logo.svg" alt="Imagen del logo de music rental" />
        </Link>

          { width > 768 ? 
            <SearchForm /> : ''
          }


          { isLogged
            ? <HeaderProfile />                
            : <HeaderButtons /> 
          }

        </section>
      </header>

      {
        width < 768 
          ? <MobileSearchBar /> 
          : ''
      }


        <Menu showMenu={showMenu}/> 
  
    </>
  );
};