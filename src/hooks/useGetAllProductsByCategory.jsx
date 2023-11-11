import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/Category";

export const useGetAllProductsByCategory = (params) => {
    const [ filteredProds , setFilteredProds ] = useState();
  
    useEffect(() => {
        getProductsByCategory(params)
        .then( filteredPrdos => setFilteredProds( filteredPrdos ) )
    }, [params]);
  
    return filteredProds;
  }