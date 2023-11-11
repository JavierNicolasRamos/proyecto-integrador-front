import { Link, useLocation } from "react-router-dom";

const routes = {
  "/admin/product/create": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/product/list", text: "Lista de productos" },
  ],
  "/admin/product/list": [
    { to: "/admin", text: "Panel de administración" },
    { to: "/admin/product/create", text: "Agregar producto" },
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
  "/admin": [
    { to: "/home", text: "Inicio" },
    { to: "/home", text: "Cuenta" }, //TODO: Change to user account when implemented
  ],
  "default": [
    { to: "/home", text: "Inicio" },
    { to: "/search/products", text: "Productos" },
    { to: "/categories", text: "Categorías" },
    { to: "/contact", text: "Contacto" }, //TODO: change to refer to contact page when implemented
  ],
};

export const Menu = () => {
  const location = useLocation();
  const links = routes[location.pathname] || routes["default"];

  return (
    <nav className="navigation-menu">
      {links.map((link, index) => (
        <Link key={index} to={link.to}>{link.text}</Link>
      ))}
    </nav>
  );
};