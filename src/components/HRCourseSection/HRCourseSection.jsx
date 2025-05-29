// src/components/HRCourseSection/HRCourseSection.jsx
import React from 'react';
import styles from './HRCourseSection.module.scss';
import {  RQ1, RQ2, RQ3, RQ4 } from '../../utils/getImage';

// Replace these imports with your actual images


export default function HRCourseSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textBlock}>
            <p className={styles.label}>HR KURSI</p>
            <h2 className={styles.title}>
              Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
            </h2>
            <p className={styles.desc}>
              HR professional kurslarining barcha qismlarini bitta to‘plamda, ancha qulayroq narxda harid qiling va qo‘shimcha sovg‘alarga ega bo‘ling!
            </p>
            <button className={styles.button}>Ro’yxatdan o’tish</button>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.boxTop}>
              <div className={styles.imageOne}>
                <img src={RQ2} alt="HR session 1" />
              </div>
              <div className={styles.imageTwo}>
                <img src={RQ1} alt="HR session 2" />
              </div>
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.imageThree}>
                <img src={RQ4} alt="HR session 3" />
                <button className={styles.playBtn}></button>
              </div>
              <div className={styles.imageFour}>
                <img src={RQ3} alt="HR session 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
