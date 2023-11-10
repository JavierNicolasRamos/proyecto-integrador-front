import { useEffect, useState } from "react";
import { getAllCategories } from "../services/Category";

export const useGetCategories = () => {
    const [ categories , setCategories ] = useState([]);
  
    useEffect(() => {
        getAllCategories()
        .then( categories => setCategories( categories ) )
    }, []);
  
    return { categories };
  }