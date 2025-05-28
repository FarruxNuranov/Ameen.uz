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
import { footerLogo } from '../../utils/getImage';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
        <img src={footerLogo``} alt="Ameen Group" className={styles.logo} />
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
              <span>123 Mahana Drive<br/>San Francisco, United States</span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <span>info@ameengroup.com</span>
            </li>
            <li>
              <FaPhoneAlt className={styles.icon} />
              <span>+1800-123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>2023 AMEEN GROUP. All rights reserved</p>
        <div className={styles.social}>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTelegramPlane /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
}
