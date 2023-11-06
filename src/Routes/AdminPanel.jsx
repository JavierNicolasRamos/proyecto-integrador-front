import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminPanel.css";

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
      name: "Productos",
      image: "/src/images/productIcon.svg",
      linkTo: "/product/list",
    },
    {
      name: "Categorías",
      image: "/src/images/categoryIcon.svg",
      linkTo: "",
    },
    {
      name: "Características",
      image: "/src/images/featureIcon.svg",
      linkTo: "",
    },
  ];

  return (
    <div className="adminCardGrid">
      {adminPanelRoutes.map((route, index) => (
        <Link key={index} className="adminCard" to={route.linkTo}>
          <img src={route.image} alt={route.name} />
          <h2>{route.name}</h2>
        </Link>
      ))}
    </div>
  );
};

