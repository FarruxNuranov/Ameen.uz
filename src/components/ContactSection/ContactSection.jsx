// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <p className={styles.label}>ALOQA</p>
        <h2 className={styles.title}>Biz bilan bog‘lanish</h2>
        <p className={styles.subtitle}>
          Ushbu maydonlarni to‘ldiring va yuborish tugmasini bosing!<br/>
          Biz sizga aloqaga chiqamiz
        </p>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Ismingiz"
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
}
