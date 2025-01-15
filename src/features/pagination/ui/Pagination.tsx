import React, { useCallback } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev: number) => Math.max(prev - 1, 1));
  }, [setCurrentPage]);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev: number) => Math.min(prev + 1, totalPages));
  }, [setCurrentPage, totalPages]);

  return (
    <div className="movie-list__pagination">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="movie-list__pagination-button"
      >
        Previous
      </button>
      <span className="movie-list__pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="movie-list__pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
