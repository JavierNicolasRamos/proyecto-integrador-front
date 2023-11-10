import { CategoryList } from "../components/CategoryList"
import { PaginateButtons } from "../components/PaginateButtons"
import { RandomProds } from "../components/RandomProds"
import { useGetAllProducts } from "../hooks/useGetAllProducts"
import "../styles/ProductPanel.css"

export const ProductPanel = () => {

  const products = useGetAllProducts()
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
        <RandomProds />
        <PaginateButtons/>
      </div>
      </div>
    </>
  )
}
