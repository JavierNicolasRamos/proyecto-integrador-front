import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useAvatar, useUserMenu } from '../hooks/index';
import { useEffect, useState } from "react";

export const HeaderProfile = () => {
  const { user, closeSession } = useUser();
  const { avatar }  = useAvatar(user);
  const { showMenu, handlerMenu, handlerMenuMouseLeave } = useUserMenu();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  const handlerCloseSession = () => {
    closeSession()
  };

  return (
    <>
      {windowWidth < 768 ? (
        <img
          src="src/images/user.svg"
          alt="imagen"
        />
      ):
      <section className={`header__user-profile`}
        onMouseLeave={handlerMenuMouseLeave}
        >
          <button
            className={`header__avatar-content ${showMenu ? 'expanded' : ''}`}
            onClick={handlerMenu}
            >
            {avatar}
          </button>
          <div
            className={`header__avatar-menu ${showMenu ? 'menu' : 'hide'}`}
            onMouseLeave={handlerMenuMouseLeave}
            >
            <div className="header__avatar-menu-options">
              <Link className="header__avatar-menu-option" to="/account">Perfil</Link>
              <button 
                className="header__avatar-menu-option"
                onClick={handlerCloseSession}
                >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </section>
        }
    </>
  );
}