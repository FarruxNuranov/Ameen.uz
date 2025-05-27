// src/components/TeachersSection/TeachersSection.jsx
import React from 'react';
import styles from './TeachersSection.module.scss';
import { teacher1 } from '../../utils/getImage';


const teachers = [
  {
    name: 'Guljamol Xudoyberdiyeva',
    position: 'Senior product designer at Google',
    photo: teacher1,
  },
  {
    name: 'Guljamol Xudoyberdiyeva',
    position: 'Senior product designer at Google',
    photo: teacher1,
  },
];

export default function TeachersSection() {
  return (
    <section className={styles.teachers}>
      <div className="container">
        <p className={styles.label}>USTOZLAR</p>
        <h2 className={styles.title}>Ustozlarimiz</h2>
        <p className={styles.subtitle}>Eng kuchli soha vakillaridan o‘rganing</p>

        <div className={styles.list}>
          {teachers.map((t, idx) => (
            <div className={styles.card} key={idx}>
              <img src={t.photo} alt={t.name} />
              <div className={styles.overlay}>
                <h3>{t.name} <span>👨‍🏫</span></h3>
                <p>{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
