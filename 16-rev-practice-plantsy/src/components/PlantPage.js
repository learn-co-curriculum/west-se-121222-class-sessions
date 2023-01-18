import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsArr, setPlantsArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(setPlantsArr)
    
  }, [])

  const addPlant = newPlant => {
    console.log("🚀 ~ file: PlantPage.js:18 ~ addPlant ~ newPlant", newPlant)
    setPlantsArr([...plantsArr, newPlant])
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={addPlant} />
      <Search />
      <PlantList plants={plantsArr}/>
    </main>
  );
}

export default PlantPage;
