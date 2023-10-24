import { Link } from "react-router-dom";
import "../styles/Header.css";
import { SearchIcon } from "./SearchIcon";

export const Header = () => {
  return (
    <>
      <section className="phone">
        <p className="phone-text">🔥 3, 6, 12 y 18 Cuotas fijas EN TODOS LOS PRODUCTOS - 📞 11 3984 9613</p>
      </section>
      <header className="header">
        <section className="header__search-bar">
          <Link to={"/home"}>
            <img className="header__search-bar__img" src="src/images/header-logo.svg" alt="Imagen del logo de music rental" />
          </Link>
          <form method="GET" className="header__search-bar__form">
            <input
              className="header__search-bar__form__input"
              placeholder="¿Qué estás buscando?"
              type="search"
              name=""
              id=""
            />
            <button className="header__search-bar__form__submit" type="submit">
              <SearchIcon/>
            </button>
          </form>
          <div className="header__action-buttons">
            <button className="header__action-button-register btn">
              Registrarse
            </button>
            <button className="header__action-button-login btn">
              Iniciar sesion
            </button>
          </div>
        </section>
      </header>
    </>
  );
};
