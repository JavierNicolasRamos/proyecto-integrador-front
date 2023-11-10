import { useEffect, useState } from "react";
import { getRandomProds } from "../services/Products";

export const useGetRandomProds = () => {
    const [ randomProds , setRandomProds ] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
  
    useEffect(() => {
        getRandomProds()
        .then( randomProds => setRandomProds( randomProds ) )
        .finally(() => setIsFetching( false ));
    }, []);
  
    return { randomProds , isFetching };
  }