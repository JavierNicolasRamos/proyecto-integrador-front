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
    getAllInstrumentsPaginated(params)
      .then((response) => {
        const productsArray = response?.content || [];
        setProducts(productsArray);
      })
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  // Obtain Products Quantity
  useEffect(() => {
    getAllInstruments()
    .then((data) => {
      const total = data?.length;
      const totalPages = Math.floor(total / 10) + 1;
      setTotalPages(totalPages);
    });
  }, []);

  // Change page handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Delete Handler
  const handleDelete = (id) => {
    deleteInstrument(id);
    setCurrentPage(1);
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
