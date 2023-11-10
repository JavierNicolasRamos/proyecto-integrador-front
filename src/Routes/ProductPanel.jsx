import { CategoryList } from "../components/CategoryList"
import { PaginateButtons } from "../components/PaginateButtons"
import { RandomProds } from "../components/RandomProds"
import "../styles/ProductPanel.css"

export const ProductPanel = () => {
  
  return (
    <>
      <div className="product__total">
        <p>25 productos</p>
      </div>
      <div className="product__content">
        <CategoryList />
        <RandomProds />
        <PaginateButtons/>
      </div>
    </>
  )
}
