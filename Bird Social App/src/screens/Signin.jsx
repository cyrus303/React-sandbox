import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Signin = () => {
  let navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userError, setUserError] = useState('init')
  const [userMatch, setUserMatch] = useState('init')
  const [passwordMatch, setPasswordMatch] = useState('init')

  const handleSignin = () => {
    setUserError('checking...')
    setUserMatch('checking')

    const currentState = JSON.parse(localStorage.getItem('bird-app'))

    if (currentState === undefined || currentState === null) {
      setUserError('success')
    } else {
      let allUsers = currentState.allUsers
      const userObj = allUsers.filter(user => {
        if (user.username === username) {
          setUserMatch('success')
          return user
        }
      })
      console.log(userObj)
      if (userObj.length === 1 && userObj[0] === undefined) {
        setUserError('fail')
      } else {
        setUserError('success')
        setPasswordMatch('checking')
        if (userObj[0].password === password) {
          let updatedState = {
            ...currentState, loggedIn: userObj[0]
          }
          localStorage.setItem('bird-app', JSON.stringify(updatedState))
          setPasswordMatch('success')
          navigate('/dashboard')
        }

      }

    }

  }

  return (
    <div className="login-container" id="signinContainer">
      <div className="sign-up-box">
        <div className="close-div">
          <div id="close-signin-btn" onClick={() => navigate('/')}><FontAwesomeIcon icon={faXmark} size="lg" /></div>
        </div>
        <div className="sign-in-twitter-div">
          <div className="sign-in-wrapper">
            <div className="twitter-join">Sign in to Twitter</div>
            <div className="btn-div">
              <div className="login-btn sign-in-google">Continue with Google</div>
              <div className="login-btn sign-in-apple">Continue with Apple</div>
              <div className="text-center">or</div>
              <div>
                <input type="text"
                  placeholder="Username"
                  className="input-username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {userError === 'init' || userError === 'success'
                ? null
                : <div className="error-text"><span>Username Not Exist, Please Register!</span></div>
              }
              {passwordMatch === 'success' || passwordMatch === 'init'
                ? null
                : <div className="error-text"><span>Password not Match!!</span></div>
              }
              <div className="login-btn sign-in-btn" onClick={handleSignin}>Sign in</div>

              <div className="login-btn sign-up-create-btn">Forgot password?</div>
            </div>
            <div className="">Don't have an account?<span className="color-blue" onClick={() => navigate('/register')}> Sign up</span></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signin