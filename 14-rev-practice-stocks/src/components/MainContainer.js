import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocksArr, setStocksArr] = useState([])
  const [portfolioArr, setPortfolioArr] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(setStocksArr)
  }, [])

  function addtoPortfolio(stockObj){
    setPortfolioArr([...portfolioArr, stockObj])
  }

  function removefromPortfolio(stockObj){
    const updatedPortfolios = portfolioArr.filter(portfolio => portfolio.id !== stockObj.id)
    setPortfolioArr(updatedPortfolios)
  }

  const stocksToDisplay = [...stocksArr]
    .sort((stockA, stockB) => {
      if (sortBy === "Alphabetically") {
        return stockA.ticker.localeCompare(stockB.ticker)
      } else {
        return stockA.price - stockB.price
      }
    }) 
    .filter(stockObj => stockObj.type === filterBy)
  
  return (
    <div>
      <SearchBar 
        sortBy={sortBy} 
        onSortChange={setSortBy}
        filterBy={filterBy}
        onFilterChange={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} onStockClick={addtoPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioArr} onPortfolioClick={removefromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
