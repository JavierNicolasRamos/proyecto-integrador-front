import { useEffect, useState } from "react";
import { getAllCategories } from "../services/Category";

export const useGetAllCategories = () => {
    const [ categories , setCategories ] = useState([]);
  
    useEffect(() => {
        getAllCategories()
        .then( categories => setCategories( categories ) )
    }, []);
  
    return { categories };
  }