import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Home;