import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={css.section}>
        <div className={css.navbarNav}>
          <NavLink className={css.navLink} aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
