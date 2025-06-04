// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  instagram,
  navLogo,
  telegram,
  youtube,
  facebook,
} from "../../utils/getImage";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Бренд + форма */}
          <div className={styles.brand}>
            <img src={navLogo} alt="Ameen Class"  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("navbar");
                  }} className={styles.logo} />
            <form className={styles.subscribe}>
              <input
                type="tel"
                placeholder="Telefon raqam"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Yuborish
              </button>
            </form>
            <p className={styles.note}>
              Iltimos telefon raqamingizni yozib qoldiring, biz siz bilan tez
              fursatda bog‘lanamiz
            </p>
          </div>

          {/* Навигация */}
          <div className={styles.column}>
            <h4>Navigatsiya</h4>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("company");
                  }}
                >
                  Kompaniya haqida
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("ustozlar");
                  }}
                >
                  Ustozlar
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("toplamlar");
                  }}
                >
                  To‘plamlar
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("bepul-kurslar");
                  }}
                >
                  Bepul kurslar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("benefits");
                  }}
                >
                  Afzalliklar
                </a>
              </li>
            </ul>
          </div>

          {/* Маълумотлар */}
          <div className={styles.column}>
            <h4>Ma’lumotlar</h4>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("partnerlar");
                  }}
                >
                  Partnerlar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("fikrlar");
                  }}
                >
                  O‘quvchilarning fikrlari
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                  }}
                >
                  Tez-tez so‘raladigan savollar
                </a>
              </li>
            </ul>
          </div>

          {/* Контакт */}
          <div className={styles.column}>
            <h4>Aloqa uchun</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                <span>
                  International Business Center,
                  <br />
                  107 B Amir Temur street,Tashkent
                </span>
              </li>
              <li>
                <FaEnvelope className={styles.icon} />
                <span>info@kozimxon.uz</span>
              </li>
              <li>
                <FaPhoneAlt className={styles.icon} />
                <span>+998 91 008 05 09</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className={styles.bottom}>
          <p>2025 AMEEN GROUP. All rights reserved</p>
          <div className={styles.social}>
            <a href="https://instagram.com">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://telegram.org">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://youtube.com">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
