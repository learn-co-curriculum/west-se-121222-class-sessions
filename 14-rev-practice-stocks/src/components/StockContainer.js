import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick }) {

  const stockCards = stocks.map(stockObj => (
    <Stock 
      key={stockObj.id} 
      stock={stockObj} 
      handleClickFunction={onStockClick} 
    />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
