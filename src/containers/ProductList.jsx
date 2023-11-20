import { ListCard } from "./index";
import "../styles/ProductList.css";
import { useFetchAdminProductList } from "../hooks/index";

export const ProductList = () => {
  
  const {
    currentPage,
    setCurrentPage,
    products,
    totalPages,
    /*isFetching,*/
    handlePageChange,
    handleDelete,
  } = useFetchAdminProductList();

  return (
    <div>
      <div className="adminProductList">
        <div>
          {products.map((instrument) => (
            <ListCard
              key={instrument.id}
              id={instrument.id}
              name={instrument.name}
              handleDelete={handleDelete}
              instrument={instrument}
            />
          ))}
        </div>
        <div className="pageNumbersDiv">
          <button
            className="pageNumber currentNumberPage"
            onClick={() =>
              setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
            }
          >
            <img src="/src/images/PrevPage.svg" alt="PrevPage" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pageNumber ${
                index + 1 === currentPage ? "currentNumberPage" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pageNumber currentNumberPage"
            onClick={() =>
              setCurrentPage(
                currentPage + 1 > totalPages ? currentPage : currentPage + 1
              )
            }
          >
            <img src="/src/images/NextPage.svg" alt="PrevPage" />
          </button>
        </div>
      </div>
    </div>
  );
};
