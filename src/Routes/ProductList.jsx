import React from "react";
import ListCard from "../components/ListCard";
import "../styles/ProductList.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [page, setpage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/instrumentos`);
        if (response.status === 200) {
          const instrumentData = response.data;
          const pageStart = page * 10 - 10;
          const pageEnd = pageStart + 10 + 1;
          const pageProducts = instrumentData.slice(pageStart, pageEnd);

          setProducts(pageProducts);
        } else {
          console.error("La solicitud a la API no fue exitosa");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="adminProductList">
      {products.map((product) => (
        <ListCard key={product.id} id={product.id} name={product.nombre} />
      ))}
    </div>
  );
};

export default ProductList;
