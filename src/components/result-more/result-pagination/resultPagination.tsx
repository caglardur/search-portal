import React from "react"

import "./resultPagination.css"

const ResultPagination: React.FC<{ totalPage: number; currentPage: number; setCurrentPage: React.Dispatch<React.SetStateAction<number>> }> = ({ totalPage, currentPage, setCurrentPage }) => {
  const pageArray = []
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i)
  }

  return (
    <div className="result-pagination">
      <div className="pagination-button" onClick={() => (currentPage <= 1 ? null : setCurrentPage(currentPage - 1))}>
        Previous
      </div>
      {pageArray.map(page =>
        totalPage < 6 ? (
          <div className={currentPage === page ? "pagination-button current-page" : "pagination-button"} key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        ) : page === 1 || page === totalPage ? (
          <div className={currentPage === page ? "pagination-button current-page" : "pagination-button"} key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        ) : page > currentPage - 2 && page < currentPage + 2 ? (
          <div className={currentPage === page ? "pagination-button current-page" : "pagination-button"} key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        ) : currentPage === 1 && page < 4 ? (
          <div className={currentPage === page ? "pagination-button current-page" : "pagination-button"} key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        ) : currentPage === totalPage && page > totalPage - 3 ? (
          <div className={currentPage === page ? "pagination-button current-page" : "pagination-button"} key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        ) : (
          <div key={page}></div>
        )
      )}
      <div className="pagination-button" onClick={() => (currentPage >= totalPage ? null : setCurrentPage(currentPage + 1))}>
        Next
      </div>
    </div>
  )
}

export default ResultPagination
