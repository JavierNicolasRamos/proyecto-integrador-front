import { useState } from "react"
import { CategoryList, RandomInstruments, FilteredInstruments } from "../containers/index"
import { Pagination, Spinner } from "../components/index"
import { useFetchAdminProductList, useGetAllInstrumentsByCategory } from "../hooks/index"
import "../styles/ProductPanel.css"

export const InstrumentPanel = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  let { instrumentsFiltered, loading } = useGetAllInstrumentsByCategory(selectedCategories);

  
  const {
    totalProducts,
    currentPage,
    setCurrentPage,
    products,
    totalPages,
    handlerPageChange,
  } = useFetchAdminProductList();  

  
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
        <p>{selectedCategories.length === 0 ? totalProducts : instrumentsFiltered.length} productos</p>
      </div>
      <div className="product__content">
        <CategoryList
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div>
          {selectedCategories.length === 0 ? (
              <RandomInstruments instruments={products}/>
            ) : (
              <FilteredInstruments  instruments={instrumentsFiltered} />
            )
          }
          {selectedCategories.length === 0 ? (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlerPageChange={handlerPageChange}
              setCurrentPage={setCurrentPage}
            />
            ) : ( 
              ''
            )
          }
        </div>
      </div>
    </>
  );
};