import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Telegram Marketplace</h1>
      <p>
        Explore our products and enjoy seamless shopping experience directly from Telegram.
      </p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>View Products</button>
      </Link>
      <br />
      <Link to="/profile">
        <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>View Profile</button>
      </Link>
    </div>
  );
};

export default Home;
