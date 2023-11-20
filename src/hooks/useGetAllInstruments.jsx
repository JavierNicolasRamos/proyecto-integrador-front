import { useEffect, useState } from "react";
import { getAllInstrumentsPaginated } from "../services/Instrument";

export const useGetAllInstruments = () => {
    const [ products , setProducts ] = useState();

    useEffect(() => {
        getAllInstrumentsPaginated()
        .then( products => setProducts( products ) )
    }, []);

    return products;
  }