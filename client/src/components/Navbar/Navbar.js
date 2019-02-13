import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id='navbar' className='navbar'>
      <Link to="/" className="navbar-brand">Dashboard</Link>
          <Link to="/form" className="nav-link">Form</Link>
          <Link to="/view" className="nav-link">Company View</Link>
          <Link to="/display" className="nav-link">Display</Link>
          <Link to="/signin" className="nav-link">Log-Out</Link>
    </div>
  )
}
