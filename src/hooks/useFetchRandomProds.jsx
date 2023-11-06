import { useEffect, useState } from "react";
import { fetchRandomProds } from "../services/RandomProds";

export const useFetchRandomProds = () => {
    const [ randomProds , setRandomProds ] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
  
    useEffect(() => {
        fetchRandomProds()
        .then( randomProds => setRandomProds( randomProds ) )
        .finally(() => setIsFetching( false ));
    }, []);
  
    return { randomProds , isFetching };
  }