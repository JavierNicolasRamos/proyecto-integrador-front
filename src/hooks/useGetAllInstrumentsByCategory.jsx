import { useEffect, useState } from "react";
import { getInstrumentsByCategory } from "../services/Category";

export const useGetAllInstrumentsByCategory = (filter) => {
  const [fetchingFilteredInstruments, setFetchingFilteredInstruments] = useState({
    instrumentsFiltered: [],
    loading: true,
  });

  useEffect(() => {
    getInstrumentsByCategory(filter)
      .then((filteredInstruments) => {
        setFetchingFilteredInstruments({
          instrumentsFiltered: filteredInstruments,
          loading: false,
        })
      })
      .catch(() => {
        setFetchingFilteredInstruments({
          instrumentsFiltered: [],
          loading: false,
        });
      });
  }, [filter]);

  return fetchingFilteredInstruments;
};