import { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../services/index";

export const useFetchAdminCategoryList = () => {
  const [category, setCategory] = useState([]);
  const [isFetching, setIsFetching] = useState(true);


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
    deleteCategory(id).then(() => {
      fetchCategories();
    });
  };

  return { category, isFetching, handlerDelete };
};
