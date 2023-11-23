import { ListCard } from "./index";
import { Pagination } from "../components/index";
import { useFetchAdminProductList } from "../hooks/index";
import "../styles/ProductList.css";

export const ProductList = () => {
  
  const {
    currentPage,
    setCurrentPage,
    products,
    totalPages,
    handlerPageChange,
    handlerDelete,
  } = useFetchAdminProductList();

  return (
    <div>
      <div className="adminProductList">
        <div>
          {products.map(( instrument ) => (
            <ListCard
              key={instrument.id}
              id={instrument.id}
              name={instrument.name}
              handlerDelete={handlerDelete}
              instrument={instrument}
            />
          ))}
        </div>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          handlerPageChange={handlerPageChange}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};