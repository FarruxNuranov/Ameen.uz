// src/components/FreeTrialSection/FreeTrialSection.jsx
import React from 'react';
import styles from './FreeTrialSection.module.scss';
import { FaPlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function FreeTrialSection() {
  return (
    <section className={styles.freeTrial}>
      <div className="container">
        <div className={styles.grid}>
          {/* Слева: Play-кнопка */}
          <div className={styles.playWrapper}>
            <button className={styles.playBtn}>
              <FaPlay className={styles.FaPlay} />
            </button>
          </div>

          {/* Центр: заголовок + текст */}
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Start your 7 Day Free Trial</h2>
            <p className={styles.subtitle}>
              Vestibulum ac diam sit amet quam vehicula elementum
            </p>
          </div>

          {/* Справа: кнопка доступа */}
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaBtn}>
              Get Free Access <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
