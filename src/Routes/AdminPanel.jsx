import { Link } from "react-router-dom";
import "../styles/AdminPanel.css";
import { NotFound } from "./NotFound";

export const AdminPanel = () => {
  const adminPanelRoutes = [
    {
      name: "Cuenta",
      image: "/src/images/account.svg",
      linkTo: "",
    },
    {
      name: "Asignar administrador",
      image: "/src/images/addAdmin.svg",
      linkTo: "",
    },
    {
      name: "Lista de Productos",
      image: "/src/images/productIcon.svg",
      linkTo: "/admin/product/list",
    },
    {
      name: "Agregar Producto",
      image: "/src/images/productIcon.svg",
      linkTo: "/admin/product/create",
    },
    {
      name: "Lista de Categorías",
      image: "/src/images/categoryIcon.svg",
      linkTo: "/admin/category/list",
    },
    {
      name: "Agregar Categoría",
      image: "/src/images/categoryIcon.svg",
      linkTo: "/admin/category/create",
    },
    {
      name: "Características",
      image: "/src/images/featureIcon.svg",
      linkTo: "",
    },
  ];

  return (
    <div>
      <div className="adminCardGrid">
        {adminPanelRoutes.map((route, index) => (
          <Link key={index} className="adminCard" to={route.linkTo}>
            <img src={route.image} alt={route.name} />
            <h2>{route.name}</h2>
          </Link>
        ))}
      </div>
      <div className="adminPanelErrorMessage">
        <NotFound code="501" text="Acceda desde un ordenador" />
      </div>
    </div>
  );
};
