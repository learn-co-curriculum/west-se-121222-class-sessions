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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plantsArr}/>
    </main>
  );
}

export default PlantPage;
