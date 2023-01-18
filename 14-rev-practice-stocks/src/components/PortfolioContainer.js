import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onPortfolioClick }) {

  const stockCards = stocks.map((stockObj, index) => (
    <Stock 
      key={stockObj.id + index} 
      stock={stockObj} 
      handleClickFunction={onPortfolioClick} 
    />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       stockCards
      }
    </div>
  );
}

export default PortfolioContainer;
