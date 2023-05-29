import React from 'react';
import Nav from '../components/Nav';
const Home = () => {

    const authToken=false
    const handleClick=()=>{
        console.log('Clicked')
    }

  return (
    <>
    <Nav/>
    <div className="home">
      <h1>Welcome to the Pet Matching App</h1>
      <p>Swipe left or right to find walking partners for your pets!</p>
      <button className='primary-button' onClick={handleClick}>
        {authToken ? 'Signout':'Create Account' }
      </button>
    </div>
    </>
  );
};

export default Home;
