import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const authToken = false;

  const handleClick = () => {
    console.log('Clicked');
    setShowModal(true);
  };

  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} />
      <div className="home">
        <h1>Welcome to the Pet Matching App</h1>
        <p>Swipe left or right to find walking partners for your pets!</p>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? 'Sign Out' : 'Create Account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Home;
