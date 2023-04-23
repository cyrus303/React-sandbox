import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Navbar() {
  return (
    <div>
      <ul class="nav nav-pills justify-content-center navbar ">
        <li class="nav-item">
          <Link to="/login" class="btn btn-primary">
            Login
          </Link>
        </li>
        |
        <li class="nav-item">
          <Link to="/register" class=" btn btn-outline-secondary">
            Register
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
