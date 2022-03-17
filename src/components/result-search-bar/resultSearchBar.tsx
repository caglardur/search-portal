import React, { useEffect, useState } from "react"

import "./resultSearchBar.css"

const ResultSearchBar: React.FC<{ searchTerm: string; setSearchTerm: React.Dispatch<React.SetStateAction<string>> }> = ({ searchTerm, setSearchTerm }) => {
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    setInput(searchTerm)
  }, [searchTerm])

  const searchFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input) {
      setSearchTerm(input)
      setError(false)
    } else {
      setSearchTerm(input)
      setError(true)
    }
  }

  return (
    <form className="result-search-bar" onSubmit={searchFormHandler}>
      <div className="search-input">
        <input type="text" id="search" className={error ? "search-error" : "search"} value={input} onChange={e => setInput(e.target.value)} autoFocus />
        <div className={error ? "error" : "disable"}>Enter a search value...</div>
      </div>
      <div className="search-button">
        <button type="submit" className="button">
          Search
        </button>
      </div>
    </form>
  )
}

export default ResultSearchBar
