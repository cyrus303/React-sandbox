import React from 'react';
import flash from '../../assets/images/flash.png';
import './Landing.css';
import Typewriter from 'typewriter-effect';

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-left" data-aos="fade-right">
        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['Fast?', 'Correct?', 'Quick?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="landing-right" data-aos="fade-left">
        <img src={flash} alt="hero" className="flash-image" />
      </div>
    </div>
  );
}

export default Landing;
