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
    handlePageChange,
    handleDelete,
  } = useFetchAdminProductList();

  return (
    <div>
      <div className="adminProductList">
        <div>
          {products.map(({ id, name, ...instrument }) => (
            <ListCard
              key={id}
              id={id}
              name={name}
              handleDelete={handleDelete}
              instrument={instrument}
            />
          ))}
        </div>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};