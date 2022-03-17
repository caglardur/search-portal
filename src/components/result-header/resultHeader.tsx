import React from "react"
import { NavLink } from "react-router-dom"

import "./resultHeader.css"

const ResultHeader = () => {
  return (
    <div className="resultHeader">
      <NavLink to="/">
        <div className="result-logo">
          <img src="./img/tesodevlogosmall.png" alt="tesodev" />
        </div>
      </NavLink>
    </div>
  )
}

export default ResultHeader
