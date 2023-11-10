import { useGetAllProducts } from "../hooks/useGetAllProducts"
import { CategoryList, RandomProds } from "../containers/index"
import { PaginateButtons } from "../components/index"
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
