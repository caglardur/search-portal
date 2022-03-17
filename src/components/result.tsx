import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import moment from "moment"

import ResultHeader from "./result-header/resultHeader"

import { dataObject } from "../Interfaces"

import "./result.css"
import ResultSearchBar from "./result-search-bar/resultSearchBar"
import ResultMore from "./result-more/resultMore"
import ResultOrder from "./result-order/resultOrder"

const Result: React.FC<{ combineData: dataObject[] }> = ({ combineData }) => {
  const [resultData, setResultData] = useState<dataObject[] | any>([])
  const [searchTerm, setSearchTerm] = useState<string | any>("")
  const [order, setOrder] = useState<string>("NameAsc")
  let location = useLocation()

  useEffect(() => {
    if (!location.state) {
      setSearchTerm("")
    } else {
      setSearchTerm(location.state)
    }
  }, [location])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filterData = combineData.filter(item => item["Name Surname"].toLowerCase().includes(searchTerm.toLowerCase()) || item["Country"].toLowerCase().includes(searchTerm.toLowerCase()) || item["City"].toLowerCase().includes(searchTerm.toLowerCase()))
      switch (order) {
        case "NameAsc":
          filterData.sort((a, b) => (a["Name Surname"] < b["Name Surname"] ? -1 : +1))
          setResultData(filterData)
          break
        case "NameDes":
          filterData.sort((a, b) => (a["Name Surname"] > b["Name Surname"] ? -1 : +1))
          setResultData(filterData)
          break
        case "YearAsc":
          filterData.sort((a, b) => (new Date(moment(a["Date"], "DD.MM.YYYY").format("LLLL")) < new Date(moment(b["Date"], "DD.MM.YYYY").format("LLLL")) ? -1 : +1))
          setResultData(filterData)
          break
        case "YearDes":
          filterData.sort((a, b) => (new Date(moment(a["Date"], "DD.MM.YYYY").format("LLLL")) > new Date(moment(b["Date"], "DD.MM.YYYY").format("LLLL")) ? -1 : +1))
          setResultData(filterData)
          break
        default:
          filterData.sort((a, b) => (a["Name Surname"] < b["Name Surname"] ? -1 : +1))
          setResultData(filterData)
      }
    } else {
      setResultData([])
    }
  }, [searchTerm, combineData, order])

  return (
    <div className="result">
      <div className="result-top">
        <ResultHeader />
        <ResultSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <ResultOrder setOrder={setOrder} />
      <ResultMore resultData={resultData} />
    </div>
  )
}

export default Result
