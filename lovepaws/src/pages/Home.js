import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';
import celebrateGif from "../images/celebrate.gif";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const[isSignUp,setIsSignUp] = useState(true)

  const authToken = false;

  const handleClick = () => {
    console.log('Clicked');
    setShowModal(true);
    setIsSignUp(true)
  };

  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} setIsSignUp={setIsSignUp} />

      <div className="home">
        <h1 className='welcome-text' >Welcome to the Pet Matching App</h1>
        <p className='mid-text'>Swipe left or right to find walking partners for your pets!</p>

        {/* <h1 className= 'primary-title'>Swipe Right</h1> */}


        <button className="primary-button" onClick={handleClick}>
          {authToken ? 'Sign Out' : 'Create Account'}
          <img src={celebrateGif} alt="Celebration GIF" className="gif-image" />

        </button>

        {showModal && <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />}
      </div>
    </div>
  );
};

export default Home;
