// src/components/PartnersSection/PartnersSection.jsx
import React from 'react';
import styles from './PartnersSection.module.scss';
import { Amplitude, Asana, Atlassian, Gitlab, Google, Razorpay } from '../../utils/getImage';


const partners = [Amplitude, Gitlab, Razorpay, Asana, Atlassian, Google];

export default function PartnersSection() {
  return (
    <section className={styles.partners}>
      
        <p className={styles.label}>PARTNERS</p>
        <h2 className={styles.title}>Our partners</h2>

        <div className={styles.slider}>
          {partners.map((logo, idx) => (
            <div className={styles.logoBox} key={idx}>
              <img src={logo} alt={`partner-${idx}`} />
            </div>
          ))}
        </div>
  
    </section>
  );
}
