import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id='navbar' className='navbar'>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link to="/" className="navbar-brand">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to="/form" className="nav-link">Form</Link>
        </li>
        <li class="nav-item">
          <Link to="/view" className="nav-link">Company View</Link>
        </li>
        <li class="nav-item">
          <Link to="/display" className="nav-link">Display</Link>
        </li>
        <li class="nav-item">
          <Link to="/signin" className="nav-link">Log-Out</Link>
        </li>
      </ul>
    </div>
  )
}
