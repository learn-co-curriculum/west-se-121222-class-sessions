import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({ inventory, onAddItem }) {

    const inventoryCards = inventory.map(item => <InventoryItemCard key={item.id} item={item} onCardClick={onAddItem} />)

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryCards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;