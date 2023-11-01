import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  const CreateProductPath = location.pathname === "/product/create";
  const ProductListPath = location.pathname === "/product/list";

  if (!CreateProductPath && !ProductListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/home"}>Inicio</Link>
        <Link to={"/categories"}>Categorías</Link>
        <Link to={"/contact"}>Contacto</Link>
      </nav>
    );
  }

  if (CreateProductPath || ProductListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/product/create"}>Crear Productos</Link>
        <Link to={"/product/list"}>Lista de productos</Link>
      </nav>
    );
  }
};
