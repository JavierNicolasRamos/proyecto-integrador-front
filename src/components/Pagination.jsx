import PropTypes from 'prop-types';
import "../styles/ProductList.css";

export const Pagination = ({ currentPage, totalPages, handlerPageChange, setCurrentPage }) => {
    
    const isInstrumentPanel = location.pathname === "/search/instruments";
    
    return(
        <>
            <div className={`pageNumbersDiv currentNumberPage ${isInstrumentPanel ? "background-light" : "background-dark"}`}>
            <button
                className="pageNumber__reset"
                onClick={() =>
                    setCurrentPage(currentPage !== 1 && 1)
                }
            >
                Volver al principio
            </button>
            <button
                className={`pageNumber currentNumberPage ${isInstrumentPanel ? "background-light" : "background-dark"}`}
                onClick={() =>
                    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
                }
            >
                <img src="/src/images/PrevPage.svg" alt="PrevPage" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                key={index + 1}
                    onClick={() => handlerPageChange(index + 1)}
                    className={`pageNumber ${
                        index + 1 === currentPage ? "currentNumberPage" : ""
                    } ${isInstrumentPanel ? "background-light" : "background-dark"}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className={`pageNumber currentNumberPage ${isInstrumentPanel ? "background-light" : "background-dark"}`}
                onClick={() =>
                    setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1)
                }
            >
                <img src="/src/images/NextPage.svg" alt="NextPage" />
            </button>
        </div>
    </>
)};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlerPageChange: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};
