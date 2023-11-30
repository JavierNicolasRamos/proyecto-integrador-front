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
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resultContent, setResultContent] = useState("");
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
  const handlerDelete = async (id) => {
    const { data, status } = await deleteInstrument(id, jwt)

    if (status === 200) {
      setIsFetching(false);
      setSuccess(true);
      setResultContent(
        `El instrumento ha sido eliminado correctamente`
      );
      setShowResult(true);
    } else {
      setIsFetching(false);
      setSuccess(false);
      setResultContent(`Ha ocurrido un error. ${data ? data : "Asegúrese de estar logueado como administrador para efectuar esta acción"}`);
      setShowResult(true);
    }

        fetchPaginatedProducts();
      }
  
  return {
    totalProducts,
    currentPage,
    setCurrentPage,
    setTotalPages,
    products,
    totalPages,
    isFetching,
    showResult,
    success,
    resultContent,
    handlerPageChange,
    handlerDelete,
  };
};
