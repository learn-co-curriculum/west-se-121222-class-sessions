import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsArr, setPlantsArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(setPlantsArr)
    
  }, [])

  const addPlant = newPlant => {
    console.log("🚀 ~ file: PlantPage.js:18 ~ addPlant ~ newPlant", newPlant)
    setPlantsArr([...plantsArr, newPlant])
  }

  const filteredPlants = plantsArr.filter(plant => {
    // return plant.name.includes(searchTerm) // case-sensitive version
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase()) // case-insensitive version
  })

  return (
    <main>
      <NewPlantForm onSubmitPlant={addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
