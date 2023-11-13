import { useState, useEffect } from "react";
import {
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
  const fetchPaginatedProducts = () => {
    setIsFetching(true);
    getAllInstrumentsPaginated(params)
      .then((response) => {
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
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Delete Handler
  const handleDelete = (id) => {
    deleteInstrument(id)
      .then(() => {
        fetchPaginatedProducts();
      })
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
