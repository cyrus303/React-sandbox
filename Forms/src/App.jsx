import React, { useState } from 'react';
import './App.css';

function App() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
  };

  console.log(formInput);

  return (
    <div className="app-container">
      <form>
        <div className="name-container">
          <label className="label-name">Name</label>
          <input
            type="text"
            placeholder="Sachin Mahesh"
            name="name"
            value={formInput.name}
            onChange={handleChange}
          />
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
