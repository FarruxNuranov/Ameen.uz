// src/components/Header/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { navLogo } from "../../../utils/getImage";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    if (pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SignUp = () => {
    window.gtag?.("event", "click_sign_up", {
      event_category: "button",
      event_label: "Записаться",
    });
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className={styles.navbar} id="navbar">
      <div className="container">
        <div className={styles.navbarInner}>
          {/* Бургер */}
          <button className={styles.burger} onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Логотип */}
          <Link
            to="/"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("navbar");
            }}
          >
            <img src={navLogo} alt="Ameen Group" />
          </Link>

          {/* Навигация */}
          <nav className={styles.navLinks}>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("ustozlar"); }}>Ustozlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("partnerlar"); }}>Partnerlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("toplamlar"); }}>To‘plamlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("bepul-kurslar"); }}>Bepul kurslar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("fikrlar"); }}>Fikrlar</NavLink>
          </nav>

          {/* Кнопка */}
          <Link onClick={SignUp} to="#" className={styles.cta}>
            Ro'yxatdan o'tish
          </Link>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("ustozlar"); }}>Ustozlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("partnerlar"); }}>Partnerlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("toplamlar"); }}>To‘plamlar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("bepul-kurslar"); }}>Bepul kurslar</NavLink>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection("fikrlar"); }}>Fikrlar</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
