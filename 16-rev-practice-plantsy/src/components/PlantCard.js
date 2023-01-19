import React, { useState } from "react";
import EditPlantForm from './EditPlantForm'

function PlantCard({ id, image, name, price, onChangePrice, onDeletePlant }) {

  const [inStock, setInStock] = useState(true)
  const [showEdit, setShowEdit] = useState(false)

  const deletePlant = () => {
    fetch(`http://localhost:6001/plants/${id}`, { method: 'DELETE' })
      .then(() => onDeletePlant(id))
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
      )}
      <button onClick={() => setShowEdit(!showEdit)}>Edit Price</button>
      <button onClick={deletePlant}>X</button>
      {showEdit && <EditPlantForm id={id} price={price} onChangePrice={onChangePrice} />}
    </li>
  );
}

export default PlantCard;
