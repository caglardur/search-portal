import React from "react"
import { NavLink } from "react-router-dom"

import ResultSingle from "../result-single/resultSingle"

import "./resultModal.css"

import { dataObject } from "../../Interfaces"

const ResultModal: React.FC<{ resultData: dataObject[]; searchTerm: string }> = ({ resultData, searchTerm }) => {
  return (
    <div className="result-modal">
      <div className="modal-frame">
        {resultData.slice(0, 3).map((result, index) => (
          <div key={index}>
            <ResultSingle result={result} />
          </div>
        ))}
        {resultData.length > 3 && (
          <div className="show-more">
            <NavLink to="/result" state={searchTerm}>
              Show more...
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultModal
