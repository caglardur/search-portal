import React, { useEffect, useState } from "react"

import "./resultMore.css"

import ResultSingle from "../result-single/resultSingle"

import { dataObject } from "../../Interfaces"
import ResultPagination from "./result-pagination/resultPagination"

const ResultMore: React.FC<{ resultData: dataObject[] }> = ({ resultData }) => {
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setTotalPage(Math.ceil(resultData.length / 6))
    setCurrentPage(1)
  }, [resultData])

  return (
    <div className="result-more">
      <div className="result-more-frame">
        {resultData.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6).map((result, index) => (
          <div key={index}>
            <ResultSingle result={result} />
          </div>
        ))}
      </div>
      {resultData.length > 6 && <ResultPagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  )
}

export default ResultMore
