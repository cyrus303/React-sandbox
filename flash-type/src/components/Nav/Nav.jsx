import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import '../Nav/Nav.css';

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="flash logo" className="flash-logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="github-link"
          href="https://github.com/cyrus303"
          rel="noreferrer"
        >
          Profile
        </a>
      </div>
    </div>
  );
}

export default Nav;
