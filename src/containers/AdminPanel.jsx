import { Link } from "react-router-dom"
import { NotFound } from "../components/index"
import { useRedirectLogin } from "../hooks"
import "../styles/AdminPanel.css"



const ACCOUNT_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464014417-account.svg"
const ADD_ADMIN_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464014815-addAdmin.svg"
const PRODUCT_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464023081-productIcon.svg"
const PRODUCTPLUS_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702168225904-instrumentosPlus.svg"
const CATEGORY_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464016147-categoryIcon.svg"
const CATEGORYPLUS_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702168225529-categoriasPlus.svg"
const FEATURE_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464017742-featureIcon.svg"
const FEATUREPLUS_ICON_IMAGE = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702168223299-caracteristicasPlus.svg"

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
    image: PRODUCTPLUS_ICON_IMAGE,
    linkTo: "/admin/instrument/create",
  },
  {
    name: "Lista de Categorías",
    image: CATEGORY_ICON_IMAGE,
    linkTo: "/admin/category/list",
  },
  {
    name: "Agregar Categoría",
    image: CATEGORYPLUS_ICON_IMAGE,
    linkTo: "/admin/category/create",
  },
  {
    name: "Administrar Características",
    image: FEATURE_ICON_IMAGE,
    linkTo: "/admin/characteristic/list",
  },
  {
    name: "Agregar Características",
    image: FEATUREPLUS_ICON_IMAGE,
    linkTo: "/admin/characteristic/create",
  },
];

export const AdminPanel = () => {

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div>
      { handlerUserNotAllowed() }
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
  )
}