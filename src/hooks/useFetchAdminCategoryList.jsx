import { useEffect, useState } from "react";
import { fetchCategory } from "../services/Category";

export const useFetchAdminCategoryList = () => {
    const [ category , setCategory ] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
  
    useEffect(() => {
        fetchCategory()
        .then( category => setCategory( category ) )
        .finally(() => setIsFetching( false ));
    }, []);
  
    return { category , isFetching };
  }     