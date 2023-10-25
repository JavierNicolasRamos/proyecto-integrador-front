import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import { SearchIcon } from "./SearchIcon";
import { Menu } from "./Menu";

export const Header = () => {
  const location = useLocation();

  // Verifica si la ruta actual es la página de inicio
  const isHome = location.pathname === "/home"


  return (
    <>
      <section className="phone">
        <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
      </section>
      <header className={`header ${!isHome ? 'hide' : ''}`}>
        <section className="header__search-bar">
          
          <Link to={"/home"} className="header_search-bar_logo">
            <img className="header_search-bar_img" src="src/images/header-logo.svg" alt="Imagen del logo de music rental" />
          </Link>
          
          <form method="GET" className="header_search-bar_form">
            <input
              className="header_search-barform_input"
              placeholder="¿Qué estás buscando?"
              type="search"
              name=""
              id=""
            />
            <button className="header_search-barform_submit" type="submit">
              <SearchIcon/>
            </button>
          </form>

          <div className="header__action-buttons">
            <button className="header__action-button-register btn">
              Registrarse
            </button>
            <button className="header__action-button-login btn">
              Iniciar sesión
            </button>
          </div>
        </section>
      </header>
      <Menu/>
    </>
  );
};