import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const routes = {
  "/admin/instrument/create": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/instrument/list", text: "Lista de productos" },
  ],
  "/admin/instrument/list": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/instrument/create", text: "Agregar producto" },
  ],
  "/admin/category/create": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/category/list", text: "Lista de categorías" },
  ],
  "/admin/category/list": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/category/create", text: "Agregar categoría" },
  ],
  "/admin/characteristic/create": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/characteristic/list", text: "Administrar características" },
  ],
  "/admin/characteristic/list": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/characteristic/create", text: "Agregar característica" },
  ],
  "/admin/user/list": [
    { to: "/admin", text: "Panel de administración" },
  ],
  "/admin": [
    { to: "/home", text: "Inicio" },
    { to: "/home", text: "Cuenta" }, //TODO: Change to user account when implemented
  ],
  "default": [
    { to: "/home", text: "Inicio" },
    { to: "/search/instruments", text: "Productos" },
    { to: "", text: "Contacto" }, //TODO: change to refer to contact page when implemented
  ],
};

export const Menu = ({showMenu}) => {
  const location = useLocation();
  const links = routes[location.pathname] || routes["default"];

  return (
    <nav className={`navigation-menu ${ showMenu ? '' : 'hide'}`} >
      {links.map(({ to, text }, index) => (
        <Link key={index} to={to}>{text}</Link>
      ))}
    </nav>
  );
};

Menu.propTypes = {
  showMenu: PropTypes.boolean.isRequired,
};