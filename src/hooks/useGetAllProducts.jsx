import { useEffect, useState } from "react";
import { getAllProducts } from "../services/Products";

export const useGetAllProducts = () => {
    const [ products , setProducts ] = useState();

    useEffect(() => {
        getAllProducts()
        .then( products => setProducts( products ) )
    }, []);

    return products;
  }