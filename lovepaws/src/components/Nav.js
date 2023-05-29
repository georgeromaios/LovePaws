import React, { useState } from 'react';
import colorlogo from '../images/logo.png';
import whitelogo from '../images/whiteLogo.png';

const Nav = ({ minimal, authToken }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorlogo : whitelogo} alt="Logo" />
      </div>

      {!authToken && (
        <button
          className={`nav-button ${showModal ? 'dark' : ''}`}
          onClick={handleClick}
        >
          Log in
        </button>
      )}

      {showModal && (
        <div className="auth-modal">
          <div onClick={() => setShowModal(false)}>
            <span>&#10005;</span>
          </div>
          Auth MODAL
        </div>
      )}
    </nav>
  );
};

export default Nav;
