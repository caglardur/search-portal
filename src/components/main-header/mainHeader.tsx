import React from "react"
import { NavLink } from "react-router-dom"

import "./mainHeader.css"

const MainHeader: React.FC = () => {
  return (
    <div className="mainHeader">
      <NavLink to="/">
        <div className="logo">
          <img src="./img/tesodevlogo.png" alt="tesodev" />
        </div>
      </NavLink>

      <div className="title">
        <div className="title-text">Search web app</div>
      </div>
    </div>
  )
}

export default MainHeader
