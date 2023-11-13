import "../styles/ProductPanel.css"
import { CategoryList, RandomInstruments } from "../containers/index"
import { PaginateButtons } from "../components/index"
import "../styles/ProductPanel.css"
import { useGetAllInstruments } from "../hooks"

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
