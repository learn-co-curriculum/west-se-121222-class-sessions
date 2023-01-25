import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({ reorders }) {

    const inventoryCards = reorders.map(item => <InventoryItemCard key={item.id} item={item}/>)

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryCards}
            </div>
        </div>
    );
}

export default ReorderInventoryList;