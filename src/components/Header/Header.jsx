import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
