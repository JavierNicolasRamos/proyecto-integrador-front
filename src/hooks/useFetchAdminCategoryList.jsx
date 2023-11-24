import { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../services/index";

export const useFetchAdminCategoryList = () => {
  const [category, setCategory] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const jwtFromSessionStorage = sessionStorage.getItem("jwt");
    jwtFromSessionStorage ? setJwt(jwtFromSessionStorage) : null
    }, []);


  const fetchCategories = () => {
    getAllCategories()
      .then((category) => setCategory(category))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Delete handler
  const handlerDelete = (id) => {
    deleteCategory(id, jwt).then(() => {
      fetchCategories();
    });
  };

  return { category, isFetching, handlerDelete };
};
