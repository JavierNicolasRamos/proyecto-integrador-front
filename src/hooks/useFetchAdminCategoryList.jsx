import { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../services/index";

export const useFetchAdminCategoryList = () => {
  const [category, setCategory] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [jwt, setJwt] = useState("");
  const [resultContent, setResultContent] = useState("");

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null;
  }, []);

  const fetchCategories = () => {
    getAllCategories()
      .then((category) => setCategory(category))
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // Delete handler
  const handlerDelete = async (id) => {
    const { data, status } = await deleteCategory(id, jwt);

    if (status === 200) {
      setIsFetching(false);
      setSuccess(true);
      setResultContent(`La categoría ha sido eliminada correctamente`);
      setShowResult(true);
    } else {
      setIsFetching(false);
      setSuccess(false);
      setResultContent(
        `Ha ocurrido un error. ${
          data
            ? data
            : "Asegúrese de estar logueado como administrador para efectuar esta acción"
        }`
      );
      setShowResult(true);
    }

    fetchCategories();
  };

  return {
    category,
    isFetching,
    handlerDelete,
    showResult,
    success,
    resultContent,
  };
};
