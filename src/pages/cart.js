import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍️ Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={styles.cartList}>
          {cart.map((item, index) => (
            <li key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div>
                <p><strong>{item.name}</strong></p>
                <p>Price: ${item.price}</p>
                <button style={styles.removeBtn} onClick={() => handleRemoveItem(index)}>Remove ❌</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Internal Styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#333'
  },
  cartList: {
    listStyleType: 'none',
    padding: 0
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  itemImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  removeBtn: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};

export default CartPage;
