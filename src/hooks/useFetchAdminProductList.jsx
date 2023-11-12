import { useState, useEffect } from "react";
import {
  getAllInstruments,
  getAllInstrumentsPaginated,
  deleteInstrument,
} from "../services/Instrument";

export const useFetchAdminProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const params = {
    page: currentPage - 1,
    size: 10,
    sort: "id,asc",
  };

  // Obtain paginated products
  useEffect(() => {
    const fetchPaginatedProducts = async () => {
      try {
        const product = await getAllInstrumentsPaginated(params);
        setProducts(product);
      } catch (error) {
        console.error("Error al obtener productos paginados:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchPaginatedProducts();
  }, [currentPage]);

  // Obtain Products Quantity
  useEffect(() => {
    const fetchProductQuantity = async () => {
      try {
        const response = await getAllInstruments();
        const total = response?.data?.length || 0;
        const totalPages = Math.floor(total / 10) + 1;
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error al obtener cantidad de productos:", error);
      }
    };

    fetchProductQuantity();
  }, []);

  // Change page handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Delete Handler
  const handleDelete = async (id) => {
    deleteInstrument(id)
      .then((response) => {
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
      });
  };

  return {
    currentPage,
    setCurrentPage,
    products,
    totalPages,
    isFetching,
    handlePageChange,
    handleDelete,
  };
};
