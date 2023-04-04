import React from 'react';
import styles from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h3>LOGO</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button>Sign In</button>
          <button>Sign Up</button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
