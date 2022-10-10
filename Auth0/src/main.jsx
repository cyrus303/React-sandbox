import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

let REACT_APP_AUTH0_DOMAIN = 'dev-w12d698r.us.auth0.com';
let REACT_APP_AUTH0_CLIENT_ID = 'thHR1t3nuhGeMPq3uySvHm9sP9NVOrZ9';

const domain = REACT_APP_AUTH0_DOMAIN;
const clientId = REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
