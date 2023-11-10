import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  const createProductPath = location.pathname === "/admin/product/create";
  const productListPath = location.pathname === "/admin/product/list";
  const adminPanelPath = location.pathname === "/admin/panel";
  const createCategoryPath = location.pathname === "/admin/category/create";
  const categoryListPath = location.pathname === "/admin/category/list";
  const createCharacteristicPath = location.pathname === "/admin/characteristic/create";

  if (createProductPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/admin/panel"}>Panel de administración</Link>
        <Link to={"/admin/product/list"}>Lista de productos</Link>
      </nav>
    );
  } else if (productListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/admin/panel"}>Panel de administración</Link>
        <Link to={"/admin/product/create"}>Agregar producto</Link>
      </nav>
    );
    
  }else if (createCategoryPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/admin/panel"}>Panel de administración</Link>
        <Link to={"/admin/category/list"}>Lista de categorías</Link>
      </nav>
    );
    
  } else if (categoryListPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/admin/panel"}>Panel de administración</Link>
        <Link to={"/admin/category/create"}>Agregar categoría</Link>
      </nav>
    );
    
  } else if (createCharacteristicPath) {
    return (
      <nav className="navigation-menu">
        <Link to={"/admin/panel"}>Panel de administración</Link>
        <Link to={"/admin/characteristic/list"}>Administrar características</Link>
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
