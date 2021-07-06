import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">LOGO HERE</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/createplan">Create plan</Link>
          </li>
          <li>
            <Link to="/myplan">My plan</Link>
          </li>
          <li>
            <Link to="/vegucate">Vegucate Me</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping list</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link className={styles.login} to="/login">
              Sign up/Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
