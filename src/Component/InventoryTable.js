import React, { useState } from "react";

const InventoryTable = ({ inventory, onDelete, onEdit }) => {
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredInventory = inventory.filter((item) =>
    item.category.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    return sortOrder === "asc"
      ? a.quantity - b.quantity
      : b.quantity - a.quantity;
  });

 const toggleSortOrder = ()=>{
    setSortOrder((prev)=>(prev==="asc"?"dsc":"asc"))
 }
 

  return (
    <div>
      <div className="flex justify-between mb-4">
        <input
            type="text"
            placeholder="search by category"
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            className="border p-2 rounded"
        />
        <button onClick={toggleSortOrder} className="bg-gray-500 text-white py-2 px-4 rounded">
          Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        
        <thead>
            <tr>
                <th className="border ">Item Name</th>
                <th className="border ">Category</th>
                <th className="border ">Quantity</th>
                <th className="border ">Actions</th>

            </tr>
        </thead>

        <tbody>
            {
                sortedInventory.map((item,index)=>(
                    <tr 
                    key={item.id}
                    className={`${item.quantity<10?"bg-red-100":""}`}>
                        <td className="p-2 border">{item.name}</td>
                        <td className="p-2 border">{item.category}</td>
                        <td className="p-2 border ">{item.quantity}</td>
                        <td className="p-2 border "><span onClick={()=>onEdit(item)} className="text-blue-500 mr-2">Edit</span><span onClick={()=>onDelete(item.id)} className="text-red-500">Delete</span></td>
                    </tr>


                ))
            }
        </tbody>
        
       
      </table>
    </div>
  );
};

export default InventoryTable;
