import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  outlet,
  Outlet,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="/learn/courses" element={<Courses />} />
        <Route path="/learn/bundle" element={<Bundle />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All the courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        courses
      </Link>
      |
      <Link className="btn btn-primary" to="/learn/bundle">
        bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>
    </div>
  );
}

function Bundle() {
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}
