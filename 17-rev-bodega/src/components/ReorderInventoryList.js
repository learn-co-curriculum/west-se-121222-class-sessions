import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({ reorders, onRemoveItem, onDelete }) {

    const inventoryCards = reorders.map(item => (
        <InventoryItemCard 
          key={item.id} 
          item={item} 
          onCardClick={onRemoveItem} 
          onDelete={onDelete}
        />)
    )
    
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