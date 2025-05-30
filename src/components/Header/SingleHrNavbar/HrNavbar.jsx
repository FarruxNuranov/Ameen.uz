// src/components/Header/SingleHrNavbar/HrNavbar.jsx
import React from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './HrNavbar.module.scss';
import { navLogo } from '../../../utils/getImage';

export default function HrNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    const doScroll = () => {
      const header = document.querySelector(`.${styles.navbar}`);
      const offset = header ? header.offsetHeight : 0;
      const el = document.getElementById(id);
      if (!el) return;
      const bodyTop = document.body.getBoundingClientRect().top;
      const elemTop = el.getBoundingClientRect().top;
      const targetY = elemTop - bodyTop - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    };

    if (pathname !== '/course') {
      navigate('/courses', { replace: true });
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
  };

  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link to="#"  onClick={(e) => { e.preventDefault(); scrollToSection('navbarHR'); }}  className={styles.logo}>
            <img src={navLogo} alt="Ameen Group" />
          </Link>

          <nav className={styles.navLinks}>
            <NavLink
              to="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('course-details'); }}
            >
              Kurs haqida qisqacha
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('curriculum'); }}
            >
              Dastur
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('teachers'); }}
            >
              Ustozlar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
            >
              Tariflar
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('feedback'); }}
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
