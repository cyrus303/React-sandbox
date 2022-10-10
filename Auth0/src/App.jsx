import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <h1>Hello from app</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
