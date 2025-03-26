import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CartPage from './pages/cart'; // Fixed case issue
import Navbar from './components/Navbar'; // Import Navbar

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<CartPage />} /> {/* Fixed component reference */}
      </Routes>
    </Router>
  );
}

export default App;
