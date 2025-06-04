import React from 'react';
import styles from './Footer.module.scss';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF
} from 'react-icons/fa';
import { facebook, instagram, navLogo, telegram, youtube } from '../../utils/getImage';

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className="container">
    <div className={styles.top}>
        <div className={styles.brand}>
        <img src={navLogo} alt="Ameen Group" className={styles.logo} />
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
            Iltimos telefon raqamingizni yozib qoldiring biz siz bilan tez vaqtda bog‘lamiz
          </p>
        </div>

        <div className={styles.column}>
          <h4>Information</h4>
          <ul>
            <li><a href="#">Company Information</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Team of Experts</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Yordam</h4>
          <ul>
            <li><a href="#">Biz haqida</a></li>
            <li><a href="#">Foydalanuvchi kelishuvi</a></li>
            <li><a href="#">Kurslar</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact Information</h4>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <span>International Business Center,<br/>107 B Amir Temur street,</span>
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

      <div className={styles.bottom}>
        <p>2023 AMEEN GROUP. All rights reserved</p>
        <div className={styles.social}>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={telegram} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          
         
          
        </div>
      </div>
    </div>
    </footer>
  );
}
