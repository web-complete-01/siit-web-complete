import type { MouseEvent } from "react";
import { Link } from "react-router";
import { BrandNavLink } from "./BrandNavLink";
import { useAuthContext } from "../../features/Auth/AuthContext";

import styles from './Nav.module.css';

export function Nav() {
  const { user, logout } = useAuthContext();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    logout();
  }

  return (
    <nav className={styles.siteNav}>
      <h1 className={styles.logo}>
        <Link to="/">Logo</Link>
      </h1>
      <menu className={styles.mainMenu}>
        <li><BrandNavLink to="/">Home</BrandNavLink></li>
        <li><BrandNavLink to="counter">Counter</BrandNavLink></li>
        <li><BrandNavLink to="weather">Weather</BrandNavLink></li>
        <li><BrandNavLink to="todos">Todos</BrandNavLink></li>
        <li><BrandNavLink to="boardgames">Boardgames</BrandNavLink></li>

        {!user && (
          <>
            <li className={styles.pushRight}><BrandNavLink to="login">Login</BrandNavLink></li>
            <li><BrandNavLink to="register">Register</BrandNavLink></li>
          </>
        )}
        {user && (
          <li className={styles.pushRight}>
            Welcome, {user.firstName}!{' '}
            <a href="/" onClick={handleLogout}>Logout</a>
          </li>
        )}
      </menu>

    </nav>
  );
}
  
  /**
   * DRY - Don't Repeat Yourself
   * 
   * 
   * SOLID
   * 
   * Single Responsibility
   * - Fiecare componenta face un singur lucru si in face bine
   * - Daca logica de business, problema pe care o rezolva e diferita de alte probleme atunci intra intr-o componenta separata
   * Open - Closed
   * - Open for Extension, Closed for Modification
   * - Componentele trebuie sa fie configurabile in masura in care sens
   * - Daca e o componenta ce suporta tipuri difeferite de continut atunci trebuie sa lasam deschis children nu sa facem props si if-uri pentru fiecare situatie care ne vine in minte
   * - If-urile bazate pe inputuri sunt o idee rea
   * Liskov Substitution
   * Interface segregation
   * Dependency Inversion
   * 
   */
