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
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null
    }, []);


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
  const handlerPageChange = (page) => {
    setCurrentPage(page);
  };

  // Delete handler
  const handlerDelete = (id) => {
    deleteInstrument(id, jwt)
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
    handlerPageChange,
    handlerDelete,
  };
};
