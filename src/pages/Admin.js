import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from '../components/AddItem';

const Admin = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch items from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  // Handle adding an item
  const handleAddItem = (item) => {
    axios.post('http://localhost:5000/api/items', item)
      .then(res => {
        setItems([...items, res.data]);
        setMessage('Item added successfully!');
      })
      .catch(err => setMessage('Error adding item'));
  };

  // Handle deleting an item
  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item._id !== id));
        setMessage('Item deleted successfully!');
      })
      .catch(err => setMessage('Error deleting item'));
  };

  return (
    <div style={styles.adminContainer}>
      <h1 style={styles.title}>Admin Panel</h1>

      <AddItem onAddItem={handleAddItem} />

      {message && <p style={styles.message}>{message}</p>}

      <div style={styles.itemList}>
        {items.map(item => (
          <div key={item._id} style={styles.itemCard}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button style={styles.deleteBtn} onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Internal styles
const styles = {
  adminContainer: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#333'
  },
  message: {
    color: 'green',
    fontWeight: 'bold',
    margin: '10px 0'
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
  deleteBtn: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};

export default Admin;
