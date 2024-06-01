import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelegramAuth from './components/TelegramAuth';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<TelegramAuth />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<TelegramAuth />} />
      </Routes>
    </Router>
  );
};

export default App;
