import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <div className="main-container" id="mainContainer">

        <div className="top-part">
          <div className="left-part">
            <div className="twitter-logo-div">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="twitter-logo-svg">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>

            </div>
          </div>
          <div className="right-part">

            <div className="twitter-right-top-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="twitter-top-svg">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>
            <div className="twitter-title">
              <div>Happening now</div>
            </div>
            <div className="sign-up-div">
              <div className="twitter-join">Join Twitter today.</div>
              <div className="btn-div">
                <div className="login-btn sign-up-google">Sign up with Google</div>
                <div className="login-btn sign-up-apple">Sign up with Apple</div>
                <div className="or-divider">or</div>
                <div className="login-btn sign-up-phone" id="sign-up-btn" onClick={() => navigate('/register')}>Sign up with phone or email</div>
                <div className="terms">By signing up, you agree to the <span className="color-blue">Terms of Service</span> and
                  <span className="color-blue">Privacy Policy</span>, including <span className="color-blue">Cookie Use</span>.
                </div>
              </div>

              <div className="sign-in-div">
                <div>Already have an account?</div>
                <div className="login-btn sign-in" id="sign-in-btn" onClick={() => navigate('/login')}>Sign in</div>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-part">
          <div className="list-link">
            <a><span>About</span></a>
            <a><span>Help Center</span></a>
            <a><span>Terms of Service</span></a>
            <a><span>Privacy Policy</span></a>
            <a><span>Cookie Policy</span></a>
            <a><span>Accessibility</span></a>
            <a><span>Ads info</span></a>
            <a><span>Blog</span></a>
            <a><span>Status</span></a>
            <a><span>Careers</span></a>
            <a><span>Brand Resources</span></a>
            <a><span>Advertising</span></a>
            <a><span>Marketing</span></a>
            <a><span>Twitter for Business</span></a>
            <a><span>Developers</span></a>
            <a><span>Directory</span></a>
            <a><span>Settings</span></a>
          </div>
          <div className="copyright">&copy; 2022 Twitter, Inc.</div>
        </div>

      </div>
    </>
  )
}

export default Home