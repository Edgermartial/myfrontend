import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const handlePurchase = () => {
    alert('Thank you for your purchase!');
    setCart([]);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;