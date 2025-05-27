// src/components/Header/Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import { navLogo, navUz } from '../../utils/getImage';

const flags = {
  uz: navUz,

};

export default function Navbar() {

  const [language, setLanguage] = useState('uz');


  const handleChange = (e) => {
    setLanguage(e.target.value);
    // сюда можно подключить i18n.changeLanguage(e.target.value)
  };
  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.logo}>
            <img src={navLogo} alt="Ameen Group" />
          
          </Link>

          <nav className={styles.navLinks}>
            <NavLink to="/courses">Kurslar</NavLink>
            <NavLink to="/contact">Aloqa</NavLink>
            <NavLink to="/about">Biz haqimizda</NavLink>
            <NavLink to="/pricing">Narxlar</NavLink>
          </nav>

          <div className={styles.actions}>
            <div className={styles.langSelect}>
              <img src={flags[language]} alt={language} />
              <select value={language} onChange={handleChange}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>

            <Link to="/signup" className={styles.cta}>
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
