import { ListCard } from "./index";
import { Pagination } from "../components/index";
import { useFetchAdminProductList, useRedirectLogin } from "../hooks/index";
import "../styles/ProductList.css";

export const ProductList = () => {
  
  const {
    totalProducts,
    currentPage,
    setCurrentPage,
    setTotalPages,
    products,
    totalPages,
    isFetching,
    showResult,
    success,
    resultContent,
    handlerPageChange,
    handlerDelete,
  } = useFetchAdminProductList();

  const { handlerUserNotAllowed } = useRedirectLogin()

  return (
    <div>
      { handlerUserNotAllowed() }
      <div className="adminProductList">
        <div>
          {products.map(( instrument ) => (
            <ListCard
              key={instrument.id}
              id={instrument.id}
              name={instrument.name}
              handlerDelete={handlerDelete}
              instrument={instrument}
              isFetching={isFetching}
              showResult={showResult}
              success={success}
              resultContent={resultContent}

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