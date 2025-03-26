import React, { useState } from 'react';
import axios from 'axios';
import AddItem from '../components/AddItem';

const Admin = () => {
  const [message, setMessage] = useState('');

  const handleAddItem = (item) => {
    axios.post('http://localhost:5000/api/items', item)
      .then(res => setMessage('Item added successfully!'))
      .catch(err => setMessage('Error adding item'));
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <AddItem onAddItem={handleAddItem} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Admin;