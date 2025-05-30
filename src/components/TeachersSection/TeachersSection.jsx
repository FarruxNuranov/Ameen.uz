// src/components/TeachersSection/TeachersSection.jsx
import React from 'react';
import styles from './TeachersSection.module.scss';
import { teacher1, teacher2 } from '../../utils/getImage';
import { Link } from 'react-router-dom';


const teachers = [
  {
    link: '/courses',
    name: 'Kozimxon To‘rayev',
    position: 'O‘qituvchi Hammuallif',
    photo: teacher1,
  },
  {
    link: '#',
    name: 'Guljamol Xudoyberdiyeva',
    position: 'Senior product designer at Google',
    photo: teacher2,
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
          {teachers.map((t, idx) => {
            const isClickable = t.link && t.link !== '#';
            // содержимое карточки
            const cardContent = (
              <>
                <img src={t.photo} alt={t.name} />
                <div className={styles.overlay}>
                  <h3>
                    {t.name} <span>👨‍🏫</span>
                  </h3>
                  <p>{t.position}</p>
                </div>
              </>
            );

            return isClickable ? (
              <Link
                to={t.link}
                target="_blank"
                className={styles.card}
                key={idx}
              >
                {cardContent}
              </Link>
            ) : (
              <div className={styles.card} key={idx}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}