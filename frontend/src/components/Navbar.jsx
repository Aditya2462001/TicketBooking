import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
    return (
        <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        <h1>TicketBooking<span>.</span></h1>
      </Link>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/">Tickets</Link></li>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Register</Link></li>
        </ul>
      </nav>

    </div>
  </header>
    )
}

export default Navbar
