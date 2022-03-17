import React, { useState } from "react"

import "./resultOrder.css"

const ResultOrder: React.FC<{ setOrder: React.Dispatch<React.SetStateAction<string>> }> = ({ setOrder }) => {
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div className="result-order">
      <div className="show-order-button" onClick={() => setShowOrder(!showOrder)}>
        <div className="order-icon">
          <img src="./img/orderby.png" alt="orderby" />
        </div>
        <div className="order-text">Order By</div>
        {showOrder && (
          <div className="order-modal">
            <ul>
              <li onClick={() => setOrder("NameAsc")}>Name ascending</li>
              <li onClick={() => setOrder("NameDes")}>Name descending</li>
              <li onClick={() => setOrder("YearAsc")}>Year ascending</li>
              <li onClick={() => setOrder("YearDes")}>Year descending</li>
            </ul>
          </div>
        )}
      </div>

      {showOrder && <div className="order-modal-disabler" onClick={() => setShowOrder(!showOrder)}></div>}
    </div>
  )
}

export default ResultOrder
