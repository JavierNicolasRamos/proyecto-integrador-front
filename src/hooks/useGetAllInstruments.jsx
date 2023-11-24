import { useEffect, useState } from "react";
import { getAllInstrumentsPaginated } from "../services/Instrument";

export const useGetAllInstruments = () => {
    const [ products, setProducts] = useState([])
    const [ isFetching, setIsFetching] = useState(true)

    const params = {
        page: 0,
        size: 10,
        sort: "score"
    };

    useEffect(() => {
        getAllInstrumentsPaginated(params)
        .then( instruments => {
            setProducts( instruments ) 
        })
        .finally(setIsFetching(false))
    }, []);

    return {products, isFetching};
  }