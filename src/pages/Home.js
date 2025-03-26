import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  // Add item to cart (Save to LocalStorage)
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(item);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${item.name} has been added to the cart!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Store</h1>
      
      <div style={styles.itemList}>
        {items.map(item => (
          <div key={item._id} style={styles.itemCard}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button style={styles.cartBtn} onClick={() => handleAddToCart(item)}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>

      {/* Navigate to Cart Page */}
      <button style={styles.viewCartBtn} onClick={() => navigate('/cart')}>
        View Cart 🛍️
      </button>
    </div>
  );
};

// Internal Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#333'
  },
  itemList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  itemCard: {
    background: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  itemImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  cartBtn: {
    background: 'green',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  viewCartBtn: {
    marginTop: '20px',
    padding: '10px 15px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Home;
