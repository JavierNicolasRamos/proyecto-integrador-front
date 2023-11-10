import { CategoryList, RandomProds } from "../containers/index"
import { PaginateButtons } from "../components/index"
import "../styles/ProductPanel.css"

export const ProductPanel = () => {
  return (
    <>
      <div className="product__total">
        <p>25 productos</p>
      </div>
      <div className="product__content">
        <CategoryList />
      <div>
        <RandomProds />
        <PaginateButtons/>
      </div>
      </div>
    </>
  )
}
