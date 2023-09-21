// BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/home" className="nav-item">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/games" className="nav-item">
        <i className="fas fa-gamepad"></i>
        <span>Games</span>
      </Link>
      <Link to="/community" className="nav-item" >
        <i className="fas fa-users"></i>
        <span>Community</span>
      </Link>
      <Link to="/ranking" className="nav-item">
        <i className="fas fa-chart-bar"></i>
        <span>Ranking</span>
      </Link>
    </div>
  );
}

export default Nav;
