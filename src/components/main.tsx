import React, { useState, useEffect } from "react"

import "./main.css"

import ResultModal from "./result-modal/resultModal"
import SearchBar from "./search-bar/searchBar"

import { dataObject } from "../Interfaces"
import MainHeader from "./main-header/mainHeader"

const Main: React.FC<{ combineData: dataObject[] }> = ({ combineData }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [resultData, setResultData] = useState<dataObject[]>([])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filterData = combineData.filter(item => item["Name Surname"].toLowerCase().includes(searchTerm.toLowerCase()) || item["Country"].toLowerCase().includes(searchTerm.toLowerCase()) || item["City"].toLowerCase().includes(searchTerm.toLowerCase()))
      setResultData(filterData)
    } else {
      setResultData([])
    }
  }, [searchTerm, combineData])

  return (
    <div className="main">
      <MainHeader />
      <SearchBar setSearchTerm={setSearchTerm} />
      {resultData.length > 0 && <ResultModal resultData={resultData} searchTerm={searchTerm} />}
    </div>
  )
}

export default Main
