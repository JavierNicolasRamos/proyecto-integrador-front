import { useState, useEffect } from "react";
import { ListCard } from "../components/ListCard";
import axios from "axios";
import "../styles/ProductList.css";

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const params = {
    page: currentPage - 1,
    size: 10,
    sort: "id,asc",
  };

  // Obtain paged products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8001/instruments/paginated`,
        { params }
      );
      if (response.status === 200) {
        setProducts(response.data.content);
      } else {
        console.error("La solicitud a la API no fue exitosa");
      }
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Obtain Products Quantuty
  const fetchTotalProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/instruments`);
      if (response.status === 200) {
        const total = response.data.length;
        const totalPages = Math.floor(total / 10) + 1;
        setTotalPages(totalPages);
      } else {
        console.error("La solicitud a la API no fue exitosa");
      }
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  useEffect(() => {
    fetchTotalProducts();
  }, []);

  // Delete Handler

  const handleDelete = async (Id) => {
    try {
      const url = `http://localhost:8001/instruments/${Id}`;
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
    <div>
      <div className="adminProductList">
        <div>
          {products.map((product) => (
            <ListCard
              key={product.id}
              id={product.id}
              name={product.name}
              handleDelete={handleDelete}
              fetchProducts={fetchProducts}
            />
          ))}
        </div>
        <div className="pageNumbersDiv">
          <button
            className="pageNumber currentNumberPage"
            onClick={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}
          >
            <img src="/src/images/PrevPage.svg" alt="PrevPage" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pageNumber ${
                index + 1 === currentPage ? "currentNumberPage" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pageNumber currentNumberPage"
            onClick={() => setCurrentPage(currentPage + 1 > totalPages? currentPage : currentPage + 1 )}
          >
            <img src="/src/images/NextPage.svg" alt="PrevPage" />
          </button>
        </div>
      </div>
    </div>
  );
};