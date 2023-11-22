import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useAvatar, useUserMenu } from '../hooks/index';
import { useEffect, useState } from "react";

export const HeaderProfile = () => {
  const { user, closeSession } = useUser();
  const avatar = useAvatar(user);
  const { showMenu, handleMenu, handleMenuMouseLeave } = useUserMenu();
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

  const handleCloseSession = () => {
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
        onMouseLeave={handleMenuMouseLeave}
        >
          <button
            className={`header__avatar-content ${showMenu ? 'expanded' : ''}`}
            onClick={handleMenu}
            >
            {avatar}
          </button>
          <div
            className={`header__avatar-menu ${showMenu ? 'menu' : 'hide'}`}
            onMouseLeave={handleMenuMouseLeave}
            >
            <div className="header__avatar-menu-options">
              <Link className="header__avatar-menu-option" to={""}>Perfil</Link>
              <button 
                className="header__avatar-menu-option"
                onClick={handleCloseSession}
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