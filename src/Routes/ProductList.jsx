import React from "react";
import ListCard from "../components/ListCard";
import "../styles/ProductList.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [page, setpage] = useState(1);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetchProducts();
  }, [page]);

  // Delete Handler

  const handleDelete = async (Id) => {
    try {
      const url = `http://localhost:8001/instrumentos/${Id}`;
      const response = await axios.delete(url);

      if (response.status === 200) {
        fetchProducts();
        console.log("Eliminación exitosa");
      } else {
        console.log(
          "La eliminación no se realizó con éxito. Código de estado:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error al eliminar el recurso:", error);
    }
  };

  return (
    <div className="adminProductList">
      {products.map((product) => (
        <ListCard
          key={product.id}
          id={product.id}
          name={product.nombre}
          handleDelete={handleDelete}
          fetchProducts={fetchProducts}
        />
      ))}
    </div>
  );
};

export default ProductList;