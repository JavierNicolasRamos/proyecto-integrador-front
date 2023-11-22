import PropTypes from 'prop-types';

export const Pagination = ({ currentPage, totalPages, handlePageChange, setCurrentPage }) => (
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
                setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1)
            }
        >
            <img src="/src/images/NextPage.svg" alt="NextPage" />
        </button>
    </div>
);

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};