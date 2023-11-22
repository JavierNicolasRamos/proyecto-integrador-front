import { useState } from "react"
import { CategoryList, RandomInstruments, FilteredInstruments } from "../containers/index"
import { PaginateButtons, Spinner } from "../components/index"
import { useGetAllInstruments, useGetAllInstrumentsByCategory } from "../hooks/index"
import "../styles/ProductPanel.css"

export const InstrumentPanel = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { instruments: fetchingFilteredInstruments, loading } = useGetAllInstrumentsByCategory(selectedCategories);
  const products = useGetAllInstruments();

  if (!products || loading) {
    return (
      <div className="product__content">
        <Spinner />
      </div>
    )
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