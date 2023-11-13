import { useEffect, useState } from "react";
import { getInstrumentsByCategory } from "../services/Category";

export const useGetAllInstrumentsByCategory = (filter) => {

  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstrumentsByCategory(filter)
      .then((filteredInstruments) => {
        setInstruments([...instruments, filteredInstruments]);
      })
      console.log(filter)
  }, [filter]);

  return instruments;
};