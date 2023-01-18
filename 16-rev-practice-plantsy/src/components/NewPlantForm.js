import React, { useState } from "react";

const defaultInputs = {
  name: "",
  image: "",
  price: ""
}

function NewPlantForm({ onSubmitPlant }) {

  const [formInputs, setFormInputs] = useState(defaultInputs)

  const handleChange = e => {
    setFormInputs({...formInputs, [e.target.name]: e.target.value})
  }

  const postPlant = () => {
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formInputs,
        price: parseFloat(formInputs.price)
      })
    }
    return fetch('http://localhost:6001/plants', config)
      .then(response => response.json())
  }

  const handleSubmit = e => {
    e.preventDefault()
    postPlant()
     .then(onSubmitPlant)
    setFormInputs(defaultInputs)
  }

  const { name, image, price } = formInputs



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
