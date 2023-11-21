import { Link, useLocation } from "react-router-dom";
import { Menu, HeaderProfile, MobileSearchBar } from "../components/index";
import { useUser } from "../context/UserContext";
import "../styles/Header.css";
import { HeaderButtons } from "./HeaderButtons";
import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";

//TODO: Falta refactorizar el componente en hooks y servicios
export const Header = () => {

  const location = useLocation();

  // Verifica si la ruta actual es la página de inicio
  const isHome = location.pathname === "/home"
  const { isLogged } = useUser()
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
      <section className="phone">
        <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
      </section>
      
      <header className={`header ${!isHome ? 'hide' : ''}`}>
        <section className="header__search-bar">

        {windowWidth < 768 ? 
          <img className="header__hamburger-menu" src="src/images/hamburger-menu.svg" alt="Menu"/> : ''
        }

        <Link to={"/home"} className="header__search-bar__logo">
          <img className="header__search-bar__img" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1699641383924-LogoMR_2logo.svg" alt="Imagen del logo de music rental" />
        </Link>

          {windowWidth > 768 ? 
            <SearchForm /> : ''
          }

          { isLogged 
            ?  <HeaderProfile />                
            : <HeaderButtons /> 
          }

        </section>
      </header>

      {windowWidth < 768 ? 
        <MobileSearchBar /> : ''
      }

      {windowWidth > 768 ? 
        <Menu/> : ''
      }
  
    </>
  );
};