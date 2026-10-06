import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">GiftLink</h1>
      <p className="home-tagline">
        Give, share and find pre-loved gifts in your community.
      </p>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => navigate('/app')}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
