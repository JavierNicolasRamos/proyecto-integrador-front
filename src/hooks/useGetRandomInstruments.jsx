import { useEffect, useState } from "react";
import { getRandomInstruments } from "../services/index";

export const useGetRandomInstruments = () => {
    const [ randomsInstruments , setRandomsInstruments ] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
  
    useEffect(() => {
        getRandomInstruments()
        .then( randomsInstruments => setRandomsInstruments( randomsInstruments ) )
        .finally(() => setIsFetching( false ));
    }, []);
  
    return { randomsInstruments , isFetching };
}