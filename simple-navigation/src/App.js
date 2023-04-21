import React from 'react';

import Link from './components/Link';
import Route from './components/Route';

import Para1Page from './pages/para1Page';
import Para2Page from './pages/para2Page';

function App() {
  return (
    <div>
      <Link to="/Para1">Go to Para 1</Link>
      <Link to="/Para2">Go to Para 2</Link>
      <div>
        <Route path="/Para1">
          <Para1Page />
        </Route>
        <Route path="/Para2">
          <Para2Page />
        </Route>
      </div>
    </div>
  );
}

export default App;
