import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  console.log("🚀 ~ file: HogBoss.js:5 ~ offspring", offspring)
  
  const [eyeColor, setEyeColor] = useState("blue");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  const babyArr = offspring.map(pigletObj => (
     <BabyHog 
       key={pigletObj.id} 
       name={pigletObj.name} 
       hobby={pigletObj.hobby} 
       eyeColor={eyeColor} 
      />
    ))
  console.log("🚀 ~ file: HogBoss.js:23 ~ HogBoss ~ babyArr", babyArr)

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
       {babyArr}
      </ul>
    </div>
  );
}

export default HogBoss;
