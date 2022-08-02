import React, { useState } from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav Section */}
      <Nav />
      {/* Landing Section */}
      <Landing />
      {/* Challenge Section */}
      <ChallengeSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
