import { CategoryList, RandomInstruments } from "../containers/index"
import { PaginateButtons } from "../components/index"
import { useGetAllInstruments, useGetAllInstrumentsByCategory } from "../hooks"
import { useEffect, useState } from "react"
import { FilteredInstruments } from "./FilteredInstruments"
import "../styles/ProductPanel.css"

export const InstrumentPanel = () => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const { instruments } = useGetAllInstrumentsByCategory(selectedCategories)
  
  const products = useGetAllInstruments();

  useEffect(() => {
    console.log(selectedCategories)
  }, [selectedCategories])

  if (!products ) {
    return null;
  }

  return (
    <>
      <div className="product__total">
        <p>{products.totalElements} productos</p>
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
              ''
              // <FilteredInstruments instruments={} />
            )
          }
          <PaginateButtons />
        </div>
      </div>
    </>
  );
};