import { CategoryList, RandomInstruments } from "../containers/index"
import { PaginateButtons } from "../components/index"
import { useGetAllInstruments, useGetAllInstrumentsByCategory } from "../hooks"
import { useState } from "react"
import { FilteredInstruments } from "./FilteredInstruments"
import "../styles/ProductPanel.css"

export const InstrumentPanel = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { instruments: fetchingFilteredInstruments, loading } = useGetAllInstrumentsByCategory(selectedCategories);
  const products = useGetAllInstruments();

  if (!products || loading) {
    return <p>Cargando...</p>; //TODO: spinner
  }

  return (
    <>
      <div className="product__total">
        <p>{selectedCategories.length === 0 ? products.totalElements : fetchingFilteredInstruments.length} productos</p>
      </div>
      <div className="product__content">
        <CategoryList
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div>
          {selectedCategories.length === 0 ? (
            <RandomInstruments />
          ) : (
            <FilteredInstruments instruments={fetchingFilteredInstruments} />
          )}
          <PaginateButtons />
        </div>
      </div>
    </>
  );
};