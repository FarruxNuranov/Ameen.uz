// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.scss';
import { heroBackground } from '../../utils/getImage';

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>HR MANAGEMENT, PROJECT MANAGEMENT</p>
            <h1>Eng yaxshilaridan ta’lim olish endi yanada oson</h1>
            <p className={styles.subtitle}>
              Kompaniyada HR tizimini joriy qilib, yuqori samaraga olib chiqishni istagan biznes egalari uchun
            </p>
            <div className={styles.buttons}>
              <button className={styles.primary}>Ro’yxatdan o’tish</button>
              <button className={styles.secondary}>
                <span className={styles.play}>▶</span> SEE OUR ACTIVITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
