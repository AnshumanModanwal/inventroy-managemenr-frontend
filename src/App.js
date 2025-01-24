import React, { useState } from "react";
import InventoryTable from "./Component/InventoryTable";
import InventoryForm from "./Component/InventoryForm";


const App = () => {
  const [inventory, setInventory] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addItem = (item) => {
    if (editItem) {
      // Update existing item
      setInventory((prev) =>
        prev.map((inv) => (inv.id === editItem.id ? item : inv))
      );
      setEditItem(null);
    } else {
      // Add new item
      setInventory((prev) => [...prev, { ...item, id: Date.now() }]);
    }
  };

  const deleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  const editExistingItem = (item) => {
    setEditItem(item);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Management App</h1>
      <InventoryForm onSubmit={addItem} editItem={editItem} />
      <InventoryTable
        inventory={inventory}
        onDelete={deleteItem}
        onEdit={editExistingItem}
      />
    </div>
  );
};

export default App;
