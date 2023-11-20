import { useEffect, useState } from "react";
import { getInstrumentsByCategory } from "../services/Category";

export const useGetAllInstrumentsByCategory = (filter) => {
  const [fetchingFilteredInstruments, setFetchingFilteredInstruments] = useState({
    instruments: [],
    loading: true,
  });

  useEffect(() => {
    getInstrumentsByCategory(filter)
      .then((filteredInstruments) => {
        setFetchingFilteredInstruments({
          instruments: filteredInstruments,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching instruments:", error);
        setFetchingFilteredInstruments({
          instruments: [],
          loading: false,
        });
      });
  }, [filter]);

  return fetchingFilteredInstruments;
};