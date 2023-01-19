import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onChangePrice, onDeletePlant }) {
  console.log("🚀 ~ file: PlantList.js:5 ~ PlantList ~ plants", plants)

  const plantCards = plants.map(plant => (
    <PlantCard 
      key={plant.id} 
      {...plant} 
      onChangePrice={onChangePrice}
      onDeletePlant={onDeletePlant}
    />)
  )

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
