import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !description || !image) {
      alert("All fields are required!");
      return;
    }

    const newItem = { name, price, description, image };

    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) throw new Error("Failed to add item");

      const data = await response.json();
      onAdd(data); // Update UI
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
