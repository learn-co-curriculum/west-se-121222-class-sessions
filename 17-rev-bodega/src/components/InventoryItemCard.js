import React from 'react'

function InventoryItemCard({item: {name, price, image}}) {
    return(
        <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={image}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;