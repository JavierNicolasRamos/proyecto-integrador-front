import { useEffect, useState } from "react";
import { getInstrumentsByCategory } from "../services/Category";

export const useGetAllInstrumentsByCategory = (params) => {
    const [ filteredProds , setFilteredInstruments ] = useState();
  
    useEffect(() => {
        getInstrumentsByCategory(params)
        .then( filteredInstruments => setFilteredInstruments( filteredInstruments ) )
    }, [params]);
  
    return filteredProds;
  }