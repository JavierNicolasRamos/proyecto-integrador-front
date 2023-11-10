import { useEffect, useState } from "react";
import { getProductsByCategorie } from "../services/Category";

export const useGetProductsByCategorie = (params) => {
    const [ filteredProds , setFilteredProds ] = useState();
  
    useEffect(() => {
        getProductsByCategorie(params)
        .then( filteredPrdos => setFilteredProds( filteredPrdos ) )
    }, [params]);
  
    return filteredProds;
  }