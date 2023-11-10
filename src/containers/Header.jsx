import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, HeaderProfile } from "../components/index";
import { useUser } from "../context/UserContext";

//TODO: Falta refactorizar el componente en hooks y servicios
export const Header = () => {
  const location = useLocation();

  // Verifica si la ruta actual es la página de inicio
  const isHome = location.pathname === "/home"
  const { isLogged } = useUser()

  return (
    <>
      <section className="phone">
        <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
      </section>
      
      <header className={`header ${!isHome ? 'hide' : ''}`}>
        <section className="header__search-bar">
          
          <Link to={"/home"} className="header__search-bar__logo">
            <img className="header__search-bar__img" src="src/images/header-logo.svg" alt="Imagen del logo de music rental" />
          </Link>
          
          <form method="GET" className="header__search-bar__form">
            <input
              className="header__search-bar__form__input"
              placeholder="¿Qué estás buscando?"
              type="search"
              name="" //TODO: Agregar name
              id="" //TODO: Agregar id
            />
          </form>

          {
            isLogged ? 
            <HeaderProfile/>
            :
            <div className="header__action-buttons">
            <Link to={"/register"}>
              <button className="header__action-button-register btn">
                Registrarse
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="header__action-button-login btn">
                Iniciar sesión
              </button>
            </Link>
          </div>
          }

        </section>

      </header>
      <Menu/>
    </>
  );
};