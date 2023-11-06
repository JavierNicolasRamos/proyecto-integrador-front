import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  const createProductPath = location.pathname === "/product/create";
  const productListPath = location.pathname === "/product/list";
  const adminPanelPath = location.pathname === "/adminpanel";

  if (!createProductPath && !productListPath && !adminPanelPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/home"}>Inicio</Link>
        <Link to={"/categories"}>Categorías</Link>
        <Link to={"/contact"}>Contacto</Link>
      </nav>
    );
  }

  if (createProductPath || productListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/product/create"}>Crear Productos</Link>
        <Link to={"/product/list"}>Lista de productos</Link>
      </nav>
    );
  }

  if (adminPanelPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/home"}>Inicio</Link>
        <Link to={"/home"}>Cuenta</Link> 
      </nav>
    );
  }
};
