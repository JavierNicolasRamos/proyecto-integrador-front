import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useAvatar, useUserMenu } from '../hooks/index';

export const HeaderProfile = () => {
  const { user, setIsLogged } = useUser();
  const avatar = useAvatar(user);
  const { showMenu, handleMenu, handleMenuMouseLeave } = useUserMenu();

  const handleCloseSession = () => {
    setIsLogged(false)
  }
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