import { useEffect, useState } from "react";
import { getAllCategories } from "../services/index";

export const useFetchAdminCategoryList = () => {
    const [ category , setCategory ] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
  
    useEffect(() => {
        getAllCategories()
        .then( category => setCategory( category ) )
        .finally(() => setIsFetching( false ));
    }, []);
  
    return { category , isFetching };
}     