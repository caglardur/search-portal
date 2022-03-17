import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main from "./components/main"
import Result from "./components/result"

import mockData from "./data/mockData.json"

import { dataObject } from "./Interfaces"

const App: React.FC = () => {
  const combineData: dataObject[] = mockData.data.map(arr => arr.reduce<dataObject>((acc, curr, i) => ({ ...acc, [mockData.cols[i]]: curr }), {}))
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main combineData={combineData} />} />
        <Route path="result" element={<Result combineData={combineData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
