import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export const HeaderProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [avatar, setAvatar] = useState("");
  const { user, setIsLogged } = useUser();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Esta función ocultará el menú cuando el mouse sale del área del menú
  const handleMenuMouseLeave = () => {
    setShowMenu(false);
  };

  const handleCloseSession = () => {
    setIsLogged(false)
  }

  useEffect(() => {
    const nameFirstLetter = user.nombre.slice(0, 1);
    const lastNameFirstLetter = user.apellido.slice(0, 1);
    setAvatar(`${nameFirstLetter}${lastNameFirstLetter}`);
  }, [avatar]);

  return (
    <section className="header__user-profile"
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
          <Link className="header__avatar-menu-option" to={""}>
            Perfil
          </Link>
          <button 
            className="header__avatar-menu-option"
            onClick={handleCloseSession}
            >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  );
}