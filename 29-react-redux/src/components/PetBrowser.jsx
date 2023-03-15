import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import Pet from "./Pet";
import Filters from './Filters';


function PetBrowser() {



  // const petCards = data?.map((pet) => (
  //   <Pet key={pet.id} pet={pet} />
  // ));

  return (
    <div>
      <Filters onChangeType={""}/>
      <div className="ui cards">{""}</div>
    </div>
  );
}

export default PetBrowser;
