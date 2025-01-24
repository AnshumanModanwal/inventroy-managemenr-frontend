import React, { useState, useEffect } from "react";

const InventoryForm = ({ onSubmit, editItem }) => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (editItem) {
      setItemName(editItem.name);
      setCategory(editItem.category);
      setQuantity(editItem.quantity);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !category || !quantity) return;
    onSubmit({ name: itemName, category, quantity: Number(quantity), id: editItem?.id });
    setItemName("");
    setCategory("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid gap-4 grid-cols-3 mb-4">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {editItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default InventoryForm;
