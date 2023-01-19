import React, { useState } from 'react'

export default function EditPlantForm({ id, price, onChangePrice}) {

    const [inputPrice, setInputPrice] = useState(price) // called inputPrice to avoid name collision with price in props

    const patchPrice = () => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ price: inputPrice })
        }
        return fetch(`http://localhost:6001/plants/${id}`, config)
          .then(r => r.json())
    }

    const handlePriceSubmit = e => {
        e.preventDefault()
        patchPrice()
         .then(onChangePrice) // pessimistic rendering; we're waiting for a successful response from the backend before we update the frontend to show that change

    }

  return (
    <form onSubmit={handlePriceSubmit}>
        <input 
          type="number"
          step="0.01"
          placeholder="New price..."
          value={inputPrice}
          onChange={(e) => setInputPrice(parseFloat(e.target.value))} // the input value will be a string by default, so have to change it to a number with parseFloat
        />
        <button type='submit'>Update Price</button>
      </form>
  )
}
