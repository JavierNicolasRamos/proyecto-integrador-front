import { useState, useEffect } from "react";
import {
  getAllInstrumentsPaginated,
  deleteInstrument,
} from "../services/Instrument";

export const useFetchAdminProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const params = {
    page: currentPage - 1,
    size: 10,
    sort: "id,asc",
  };

  // Obtain paginated products
  const fetchPaginatedProducts = () => {
    getAllInstrumentsPaginated(params)
      .then((response) => {
        setTotalProducts(response.totalElements)
        
        const instruments = response.content || [];
        setProducts(instruments);

        const pages = response?.totalPages || 1;
        setTotalPages(pages);
      })
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchPaginatedProducts();
  }, [currentPage]);

    // Change page handler
  const handlerPageChange = (page) => {
    setCurrentPage(page);
  };

  // Delete handler
  const handlerDelete = (id) => {
    deleteInstrument(id)
      .then(() => {
        fetchPaginatedProducts();
      })
  };

  return {
    totalProducts,
    currentPage,
    setCurrentPage,
    setTotalPages,
    products,
    totalPages,
    isFetching,
    handlerPageChange,
    handlerDelete,
  };
};
