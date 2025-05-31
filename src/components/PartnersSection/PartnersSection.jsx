// src/components/PartnersSection/PartnersSection.jsx
import React from 'react';
import styles from './PartnersSection.module.scss';
import { Amplitude, Asana, Atlassian, Gitlab, Google, Razorpay } from '../../utils/getImage';

const partners = [Amplitude, Gitlab, Razorpay, Asana, Atlassian, Google];

export default function PartnersSection() {
  return (
    <section className={styles.partners}>
      <p className={styles.label}>PARTNERS</p>
      <h2 className={styles.title}>Bizning partnerlar</h2>

      {/* Контейнер с „окном“ */}
      <div className={styles.sliderContainer}>
        {/* Внутренний трек, который движется */}
        <div className={styles.sliderTrack}>
          {/* Дублируем список дважды, чтобы получить бесконечный цикл */}
          {[...partners, ...partners].map((logo, idx) => (
            <div className={styles.logoBox} key={idx}>
              <img src={logo} alt={`partner-${idx % partners.length}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
