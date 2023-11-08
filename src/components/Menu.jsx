import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  const createProductPath = location.pathname === "/product/create";
  const productListPath = location.pathname === "/product/list";
  const adminPanelPath = location.pathname === "/adminpanel";
  const createCategoryPath = location.pathname === "/category/create";
  const categoryListPath = location.pathname === "/category/list";

  if (createProductPath || productListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/product/create"}>Crear producto</Link>
        <Link to={"/product/list"}>Lista de productos</Link>
      </nav>
    );
  } else if (createCategoryPath || categoryListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/category/create"}>Crear categoría</Link>
        <Link to={"/category/list"}>Lista de categorías</Link>
      </nav>
    );
  } else if (adminPanelPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/home"}>Inicio</Link>
        <Link to={"/home"}>Cuenta</Link> 
      </nav>
    );
  } else {
    return (
      <nav className="navigation-menu">
        <Link to={"/home"}>Inicio</Link>
        <Link to={"/categories"}>Categorías</Link>
        <Link to={"/contact"}>Contacto</Link>
      </nav>
    );
  }


};
