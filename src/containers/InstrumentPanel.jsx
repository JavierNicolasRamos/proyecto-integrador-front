import { useGetAllInstruments } from "../hooks/index"
import { CategoryList, RandomInstruments } from "./index"
import { PaginateButtons } from "../components/index"
import "../styles/ProductPanel.css"

export const InstrumentPanel = () => {
  
  const products = useGetAllInstruments()
    if (!products) {
      return null;
  }

  return (
    <>
      <div className="product__total">
        <p>{products.totalElements} productos</p>
      </div>
      <div className="product__content">
        <CategoryList />
      <div>
        <RandomInstruments />
        <PaginateButtons/>
      </div>
      </div>
    </>
  )
}
