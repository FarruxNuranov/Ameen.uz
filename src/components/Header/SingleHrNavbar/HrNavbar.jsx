// src/components/Header/Navbar.jsx

import styles from './HrNavbar.module.scss';
import { Link, NavLink } from 'react-router-dom';


import { navLogo,  } from '../../../utils/getImage';



export default function HrNavbar() {





  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.logo}>
            <img src={navLogo} alt="Ameen Group" />
          
          </Link>

          <nav className={styles.navLinks}>
            <NavLink to={"/courses"} target="_blank" >Kurs haqida qisqacha</NavLink>
            <NavLink >Dastur</NavLink>
            <NavLink >Ustozlar</NavLink>
            <NavLink >Tariflar</NavLink>
            <NavLink >Fikrlar</NavLink>
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
