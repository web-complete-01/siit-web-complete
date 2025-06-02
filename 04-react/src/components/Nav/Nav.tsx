import { Link, NavLink } from "react-router";

import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.siteNav}>
      <h1 className={styles.logo}>
        <Link to="/">Logo</Link>
      </h1>
      <menu className={styles.mainMenu}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="counter">Counter</NavLink></li>
        <li><NavLink to="weather">Weather</NavLink></li>
      </menu>
    </nav>
  );
}
