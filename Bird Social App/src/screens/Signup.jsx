import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { validPassword, validUsername, validName } from '../utils/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRegistered, setUserRegistered] = useState('init');
  const [pwdError, setPwdError] = useState('init');
  const [nameError, setNameError] = useState('init');

  const handleUsername = (e) => {
    let userVar = e.target.value;
    setUsername(userVar);
    setUserRegistered('');
    if (validUsername.test(userVar)) {
      setUserRegistered('success');
    }
  };

  const handleName = (e) => {
    let nameVar = e.target.value;
    setName(nameVar);
    setNameError('');
    if (validName.test(nameVar)) {
      setNameError('success');
    }
  };

  const handlePassword = (e) => {
    let pwdVar = e.target.value;
    setPwdError('');
    setPassword(pwdVar);
    if (validPassword.test(pwdVar)) {
      setPwdError('success');
    }
  };

  const handleSignup = (e) => {
    console.log(name, username, password);

    let currentState = JSON.parse(localStorage.getItem('bird-app'));
    console.log('currentState : ', currentState);

    // if bird-app has no data in localstorage
    if (currentState === undefined || currentState === null) {
      let currentUsers = [
        {
          userId: 1,
          name: 'Sachin Mahesh',
          username: 'Sachin',
          password: 'Sachin@123',
          profilePic:
            'https://pbs.twimg.com/profile_images/1284167924123500545/5cloQkyv_400x400.jpg',
        },
        {
          userId: 2,
          name: 'Mehul Mohan',
          username: 'mehulmpt',
          password: 'Mehul@123',
          profilePic:
            'https://pbs.twimg.com/profile_images/1418658538688155648/CREA-CYu_400x400.jpg',
        },
        {
          userId: 3,
          name: 'Elon Musk',
          username: 'elonmusk',
          password: 'Elon@123',
          profilePic:
            'https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg',
        },
      ];
      currentUsers.push({
        userId: 4,
        name,
        username,
        password,
        profilePic:
          'https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg',
      });

      let newUsersState = {
        allUsers: currentUsers,
      };
      localStorage.setItem('bird-app', JSON.stringify(newUsersState));
      setPassword('');
      setUsername('');

      navigate('/login');
    } else {
      let currentUsers = currentState.allUsers;
      let lastUser = currentUsers[currentUsers.length - 1];
      console.log(lastUser);
      currentUsers.push({
        userId: lastUser.userId + 1,
        name,
        username,
        password,
      });

      let updatedState = {
        ...currentState,
        allUsers: currentUsers,
      };
      localStorage.setItem('bird-app', JSON.stringify(updatedState));
      setPassword('');
      setUsername('');

      navigate('/login');
    }
  };

  return (
    <div className="login-container" id="signupContainer">
      <div className="sign-up-box">
        <div className="close-div">
          <div id="close-signup-btn" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </div>
        </div>
        <div className="create-account">
          <div className="twitter-join">Create your account</div>
          <div className="btn-div">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input-username"
                required
                value={name}
                onChange={handleName}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Username"
                className="input-username"
                required
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input-password"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
          {nameError === 'success' || nameError === 'init' ? null : (
            <div className="error-text">
              <span>Name</span> should not be blank and atleast <span>3</span>{' '}
              characters.
            </div>
          )}
          {userRegistered === 'success' || userRegistered === 'init' ? null : (
            <div className="error-text">
              Username must be <span>alphanumeric</span> and min <span>5</span>{' '}
              characters.
            </div>
          )}

          {pwdError === 'success' || pwdError === 'init' ? null : (
            <div className="error-text">
              password characters not fullfilled, must have one{' '}
              <span>Uppercase</span> and <span>lowercase</span> letter,{' '}
              <span>number</span>, <span>special character</span> and min{' '}
              <span>8</span> character.
            </div>
          )}

          {userRegistered === 'success' &&
            pwdError === 'success' &&
            nameError === 'success' && (
              <div
                className="login-btn sign-up-create-btn"
                onClick={handleSignup}
              >
                Sign up
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
