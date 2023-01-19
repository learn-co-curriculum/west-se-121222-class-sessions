import React, { useState } from "react";
import EditPlantForm from './EditPlantForm'

function PlantCard({ id, image, name, price, onChangePrice, onDeletePlant }) {

  const [inStock, setInStock] = useState(true)
  const [showEdit, setShowEdit] = useState(false) // not in deliverables, but will let me hide the updatePrice form

  const deletePlant = () => {
    // delete from the backend (the repsonse is just an empty {})
    fetch(`http://localhost:6001/plants/${id}`, { method: 'DELETE' })
      .then(() => onDeletePlant(id)) // send the id up to PlantPage so we can remove the plant from state
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
      )}
      <button 
        className={showEdit ? "secondary" : ""} 
        onClick={() => setShowEdit(!showEdit)}
      >
        {showEdit ? "Close" : "Edit"}
      </button>
      <button onClick={deletePlant} className="danger">X</button>
      {/* we are able to hide the new price form with conditional rendering based on showEdit boolean in state */}
      {showEdit && <EditPlantForm id={id} price={price} onChangePrice={onChangePrice} />}
    </li>
  );
}

export default PlantCard;
