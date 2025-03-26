import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items");
        if (!response.ok) throw new Error("Failed to fetch items");

        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Available Items</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          items.map((item) => (
            <div key={item._id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
              <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price: </strong>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
