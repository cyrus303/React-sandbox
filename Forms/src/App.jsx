import React, { useState } from 'react';
import './App.css';

function App() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    if (formInput.name.length <= 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (formInput.email.length <= 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (formInput.password.length <= 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (formInput.password.length < 6) {
      setPasswordError(true);
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={handelSubmit}>
        <div className="name-container">
          <label className="label-name">Name</label>
          <input
            type="text"
            placeholder="Sachin Mahesh"
            name="name"
            value={formInput.name}
            onChange={handleChange}
          />

          {nameError && (
            <p className="error-msg">please enter a valid name !!!</p>
          )}
        </div>
        <div className="name-container">
          <label className="label-email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="sachinmahesh@mail.com"
            value={formInput.email}
            onChange={handleChange}
          />
          {emailError && (
            <p className="error-msg">please enter a valid Email !!!</p>
          )}
        </div>
        <div className="name-container">
          <label className="label-password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*****"
            value={formInput.password}
            onChange={handleChange}
          />
          {passwordError && (
            <p className="error-msg">please enter a valid password !!!</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
