import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Pet from "./Pet";
import Filters from './Filters';


function PetBrowser() {

  const pets = useSelector(state => state.pets)
  console.log("🚀 ~ file: PetBrowser.jsx:10 ~ PetBrowser ~ pets:", pets)

  const petCards = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <div>
      <Filters onChangeType={""}/>
      <div className="ui cards">{petCards}</div>
    </div>
  );
}

export default PetBrowser;
