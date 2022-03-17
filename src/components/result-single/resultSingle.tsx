import React from "react"

import "./resultSingle.css"

import { dataObject } from "../../Interfaces"

const ResultSingle: React.FC<{ result: dataObject }> = ({ result }) => {
  const fullYear = result["Date"].slice(6, 10)

  return (
    <div className="result-single">
      <div className="result-border">
        <div className="fistLine">
          <div className="location">
            {result["Country"]} - {result["City"]}
          </div>
          <div className="email">Email: {result["Email"]}</div>
        </div>
        <div className="name-surname-year">
          {result["Name Surname"]} - {fullYear}
        </div>
      </div>
    </div>
  )
}

export default ResultSingle
