// src/components/Header/Navbar.jsx
import React from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { navLogo } from '../../../utils/getImage';

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const scrollToSection = (id) => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link to="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('navbar');
          }} className={styles.logo}>
            <img src={navLogo} alt="Ameen Group" />
          </Link>

          <nav className={styles.navLinks}>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ustozlar');
              }}
            >
              Ustozlar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('partnerlar');
              }}
            >
              Partnerlar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('toplamlar');
              }}
            >
              To`plamlar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('bepul-kurslar');
              }}
            >
              Bepul kurslar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('fikrlar');
              }}
            >
              Fikrlar
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <Link to="/signup" className={styles.cta}>
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
