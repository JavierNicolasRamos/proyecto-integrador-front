import { useState, useEffect } from "react";
import { getAllCategories } from "../services/index";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [ isFetching , setIsFetching ] = useState(true);
  const [ error , setError ] = useState(null);

  useEffect(() => {    
    getAllCategories()
    .then( categories => {
       categories.sort((a, b) => a.name.localeCompare(b.name))
       setCategories(categories)
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => setIsFetching( false ));
  }, []);

  return { categories, selectedCategoryId, setSelectedCategoryId, isFetching, error};
};