import React, { useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorderInventory, setReorderInventory] = useState([])

    useEffect(() => {
      fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(jsonInventory => setInventory(jsonInventory))
    }, [])
    
    function addToReorders(item){
        console.log("🚀 ~ file: InventoryManger.js:17 ~ addToReorders ~ item", item)
        const target = reorderInventory.find(inventory => inventory.id === item.id)
        if (!target) {
            setReorderInventory([...reorderInventory, item])
        } else {
            console.log(
                "Item already in reorders!"
            )
        }
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onAddItem={addToReorders} />
            <ReorderInventoryList reorders={reorderInventory}/>
        </div>
    );
}

export default InventoryManager;