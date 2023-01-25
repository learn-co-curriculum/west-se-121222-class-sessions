import React, { useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const baseUrl = "http://localhost:8001/inventory"

    const [inventory, setInventory] = useState([])
    const [reorderInventory, setReorderInventory] = useState([])

    useEffect(() => {
      fetch(baseUrl)
        .then(response => response.json())
        .then(jsonInventory => setInventory(jsonInventory))
    }, [])
    
    function addToReorders(item){
        const target = reorderInventory.find(inventory => inventory.id === item.id)
        if (!target) {
            setReorderInventory([...reorderInventory, item])
        } else {
            console.log(
                "Item already in reorders!"
            )
        }
    }

    function removeFromReorders(item){
        setReorderInventory(reorderInventory.filter(inventory => inventory.id !== item.id))
    }
    
    function handleDelete(e, id){
        e.stopPropagation()
        console.log("🚀 ~ file: InventoryManger.js:32 ~ handleDelete ~ id", id)
        fetch(baseUrl + `/${id}`, {method: 'DELETE'})
        setReorderInventory(reorderInventory.filter(inventory => inventory.id !== id))
        setInventory(inventory.filter(inventory => inventory.id !== id))
    }

    // function removeFromStateArr(stateArr, setArrFn, id){
    //     setArrFn(stateArr.filter(inventory => inventory.id !== id))
    // }

    return(
        <div className="container">
            <CurrentInventoryList 
              inventory={inventory} 
              onAddItem={addToReorders} 
              onDelete={handleDelete}
              />
            <ReorderInventoryList 
              reorders={reorderInventory} 
              onRemoveItem={removeFromReorders}
              onDelete={handleDelete}
              />
        </div>
    );
}

export default InventoryManager;