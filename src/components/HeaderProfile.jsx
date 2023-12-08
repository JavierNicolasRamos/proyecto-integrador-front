import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useUserMenu, useWindowSize } from '../hooks/index';
import { useEffect, useState } from "react";

export const HeaderProfile = () => {
  const { avatar, closeSession } = useUser();
  const { showMenu, handlerMenu, handlerMenuMouseLeave } = useUserMenu();
  const { windowSize } = useWindowSize()

  const handlerCloseSession = () => {
    closeSession()
  };

  return (
    <>
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
    </>
  );
}