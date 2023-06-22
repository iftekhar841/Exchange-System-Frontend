import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"
import ExchangeTable from './components/ExchangeTable'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'

const App = () => {

  const [exchangeRate, setExchangeRate] = useState([])
  const [exchangeIcon, setExchangeIcon] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/api/getExchange-rate")
      .then((res) => {
        setExchangeRate(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/api/getExchange-icon")
      .then((response) => {
        console.log("🚀 ~ file: App.js:26 ~ .then ~ response:", response)
        setExchangeIcon(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div>
        <SearchBar />
        <ExchangeTable exchangeRate={exchangeRate} exchangeIcon={exchangeIcon} />
        <Pagination />
      </div>
    </>
  )
}

export default App
