import { Link } from "react-router-dom";
import { NotFound } from "../components/index";
import "../styles/AdminPanel.css";

const ACCOUNT_IMAGE = "/src/images/account.svg";
const ADD_ADMIN_IMAGE = "/src/images/addAdmin.svg";
const PRODUCT_ICON_IMAGE = "/src/images/productIcon.svg";
const CATEGORY_ICON_IMAGE = "/src/images/categoryIcon.svg";
const FEATURE_ICON_IMAGE = "/src/images/featureIcon.svg";

const adminPanelRoutes = [
  {
    name: "Cuenta",
    image: ACCOUNT_IMAGE,
    linkTo: "",
  },
  {
    name: "Asignar administrador",
    image: ADD_ADMIN_IMAGE,
    linkTo: "/admin/user/list",
  },
  {
    name: "Lista de Productos",
    image: PRODUCT_ICON_IMAGE,
    linkTo: "/admin/instrument/list",
  },
  {
    name: "Agregar Producto",
    image: PRODUCT_ICON_IMAGE,
    linkTo: "/admin/instrument/create",
  },
  {
    name: "Lista de Categorías",
    image: CATEGORY_ICON_IMAGE,
    linkTo: "/admin/category/list",
  },
  {
    name: "Agregar Categoría",
    image: CATEGORY_ICON_IMAGE,
    linkTo: "/admin/category/create",
  },
  {
    name: "Administrar Características",
    image: FEATURE_ICON_IMAGE,
    linkTo: "/admin/characteristic/list",
  },
  {
    name: "Agregar Características",
    image: FEATURE_ICON_IMAGE,
    linkTo: "/admin/characteristic/create",
  },
];

export const AdminPanel = () => (
  <div>
    <div className="adminCardGrid">
      {adminPanelRoutes.map(({ image, name, linkTo }, index) => (
        <Link key={index} className="adminCard" to={linkTo}>
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </Link>
      ))}
    </div>
    <div className="adminPanelErrorMessage">
      <NotFound code="501" text="Acceda desde un ordenador" />
    </div>
  </div>
);